// @flow
import React, { Component } from 'react';
import Form, {
  FieldSet,
  FormGroup,
  Label,
  OptionsSwitcher,
  RangeSlider,
} from '../../components/Form/Form';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import constants from './constants';

type State = {
  target: {
    working: number,
    resting: number,
  },
  pauseBetween: boolean,
  confirmEndingTask: boolean,
};

export type Props = {
  isLoading: boolean,
  target: {
    working: number,
    resting: number,
  },
  pauseBetween: boolean,
  confirmEndingTask: boolean,
  settingsSave: () => void,
};

class SettingsConfig extends Component<Props, State> {
  handleSubmit: (e: Event) => void;
  handleTargetChange: (e: Event) => void;
  handleTargetBlur: (e: Event) => void;
  handlePauseBetweenChange: (e: Event) => void;
  handleConfirmEndingTaskChange: (e: Event) => void;
  constructor(props: Props) {
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
  handleSubmit = function(e: Event) {
    const { settingsSave } = this.props;
    e.preventDefault();
    settingsSave({
      ...this.state,
    });
  }
  handleTargetSlider(mode: string) {
    return (value: number) => {
      this.setState({
        target: {
          ...this.state.target,
          [`${mode}`]: value
        }
      });
    }
  }
  handlePauseBetweenChange(e: Event) {
    this.setState({
      pauseBetween: e.target.value === 'true' ? true : false,
    });
  }
  handleConfirmEndingTaskChange(e: Event) {
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
        {isLoading && <Loading />}
      </Form>
    );
  }
}

export default SettingsConfig;