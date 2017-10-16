// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Form, {
  FieldSet,
  FormGroup,
  Label,
  TextField,
  OptionsSwitcher
} from '../../components/Form/Form';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { type State } from '../../data/settings/duck';

type Props = State;

const StyledSettingsConfig = Form.extend(`

`);

const TargetField = styled(TextField).attrs(
  {
    type: 'number',
    min: 1,
    required: true,
  }
)``;

class SettingsConfig extends Component<Props, State> {
  handleSubmit: any;
  handleTargetChange: any;
  handlePauseBetweenChange: any;
  handleConfirmEndingTaskChange: any;
  constructor(props: Props) {
    super(props);
    const { target, pauseBetween, confirmEndingTask } = props;
    this.state = {
      target,
      pauseBetween,
      confirmEndingTask,
    };
    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handlePauseBetweenChange = this.handlePauseBetweenChange.bind(this);
    this.handleConfirmEndingTaskChange = this.handleConfirmEndingTaskChange.bind(this);
  }
  handleSubmit = function(e: any) {
    e.preventDefault();
  }
  handleTargetChange(mode: string) {
    return (e: any) => {
      this.setState({
        target: {
          ...this.state.target,
          [`${mode}`]: e.target.value
        }
      });
    }
  }
  handlePauseBetweenChange(e: any) {
    this.setState({
      pauseBetween: e.target.value === 'true' ? true : false,
    });
  }
  handleConfirmEndingTaskChange(e: any) {
    this.setState({
      confirmEndingTask: e.target.value === 'true' ? true : false,
    });
  }
  render() {
    const { target, pauseBetween, confirmEndingTask } = this.state;
    return (
      <StyledSettingsConfig onSubmit={this.handleSubmit}>
        <Heading>Settings Config</Heading>
        <FieldSet>
          <FormGroup>
            <Label>Working time (minutes)</Label>
            <TargetField
              defaultValue={target.working}
              onChange={this.handleTargetChange('working')}
            />
          </FormGroup>
          <FormGroup>
            <Label>Resting time (minutes)</Label>
            <TargetField
              defaultValue={target.resting}
              onChange={this.handleTargetChange('resting')}
            />
          </FormGroup>
          <FormGroup>
            <Label>¿Pause between pomodoros?</Label>
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
        <Button type="submit" secondary block>Save</Button>
      </StyledSettingsConfig>
    );
  }
}

export default SettingsConfig;
