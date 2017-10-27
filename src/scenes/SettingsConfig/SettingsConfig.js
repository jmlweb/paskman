import React, { Component } from 'react';
import createDynamicComponent from '../../components/DynamicComponent/DynamicComponent';
import {
  Form,
  FieldSet,
  FormGroup,
  Label,
  OptionsSwitcher,
  RangeSlider,
} from '../../components/Form';
import constants from './constants';

const Loading = createDynamicComponent(
  () => import('../../components/Loading/Loading'),
  /* istanbul ignore next */
  () => require('../../components/Loading/Loading'),
);
const Heading = createDynamicComponent(
  () => import('../../components/Heading/Heading'),
  /* istanbul ignore next */
  () => require('../../components/Heading/Heading'),
);
const Button = createDynamicComponent(
  () => import('../../components/Button/Button'),
  /* istanbul ignore next */
  () => require('../../components/Button/Button'),
);

class SettingsConfig extends Component {
  constructor(props) {
    super(props);
    const { target, pauseBetween, confirmEndingTask } = props;
    this.state = {
      target,
      pauseBetween,
      confirmEndingTask,
    };
    this.handlePauseBetweenChange = this.handlePauseBetweenChange.bind(this);
    this.handleConfirmEndingTaskChange = this.handleConfirmEndingTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { target, pauseBetween, confirmEndingTask } = nextProps;
    this.setState({
      target,
      pauseBetween,
      confirmEndingTask,
    });
  }
  handleSubmit = function(e) {
    const { settingsSave } = this.props;
    e.preventDefault();
    settingsSave({
      ...this.state,
    });
  }
  handleTargetSlider(mode) {
    return (value) => {
      this.setState({
        target: {
          ...this.state.target,
          [`${mode}`]: value
        }
      });
    }
  }
  handlePauseBetweenChange(e) {
    this.setState({
      pauseBetween: e.target.value === 'true' ? true : false,
    });
  }
  handleConfirmEndingTaskChange(e) {
    this.setState({
      confirmEndingTask: e.target.value === 'true' ? true : false,
    });
  }
  render() {
    const { isLoading } = this.props;
    const { target, pauseBetween, confirmEndingTask } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Heading>Settings Config</Heading>
        <FieldSet>
          <FormGroup>
            <Label><b>{target.working}</b> minutes working time</Label>
            <RangeSlider
              tooltip={false}
              min={constants.working.target.min}
              max={constants.working.target.max}
              step={constants.working.step}
              value={target.working}
              onChange={this.handleTargetSlider('working')}
            />
          </FormGroup>
          <FormGroup>
            <Label><b>{target.resting}</b> minutes resting time</Label>
            <RangeSlider
              tooltip={false}
              min={constants.resting.target.min}
              max={constants.resting.target.max}
              step={constants.resting.step}
              value={target.resting}
              onChange={this.handleTargetSlider('resting')}
            />
          </FormGroup>
          <FormGroup>
            <Label>Pause between pomodoros?</Label>
            <OptionsSwitcher
              options={
                [
                  {
                    value: true,
                    description: 'Yes',
                  },
                  {
                    value: false,
                    description: 'No',
                  },
                ]
              }
              value={pauseBetween}
              onChange={this.handlePauseBetweenChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Require confirm for ending tasks</Label>
            <OptionsSwitcher
              options={
                [
                  {
                    value: true,
                    description: 'Yes',
                  },
                  {
                    value: false,
                    description: 'No',
                  },
                ]
              }
              value={confirmEndingTask}
              onChange={this.handleConfirmEndingTaskChange}
            />
          </FormGroup>
        </FieldSet>
        <Button type="submit" color="success" block>Save</Button>
        {isLoading && <Loading text="Loading data..." />}
      </Form>
    );
  }
}

export default SettingsConfig;
