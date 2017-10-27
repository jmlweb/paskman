import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { stripUnit } from 'polished';
import spacing from '../../../styles/spacing';
import timings from '../../../styles/timings';
import topBarHeight from '../../../styles/topBarHeight';
import TopBarBtnOpenSVG from './TopBarBtnOpenSVG';
import TopBarBtnClosedSVG from './TopBarBtnClosedSVG';

const StyledTopBarBtn = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  display: inline-flex;
  height: ${topBarHeight};
  justify-content: center;
  margin: 0;
  margin-right: ${+stripUnit(spacing.sm) * -1}px;
  outline: 0;
  transition: all 0.2s ${timings.easeOutQuad};
  width: 12vh;
  transform: ${props => props.menuOpen ? 'rotate(-90deg)': 'rotate(-180deg)'};
  &:active {
    opacity: 0.3;
  }
`;

class TopBarBtn extends PureComponent {
  handleClick: any;
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const { toggleMenu } = this.props;
    toggleMenu();
  }
  render() {
    const { menuOpen } = this.props;
    const btnText = `${menuOpen ? 'Close' : 'Open'} menu`;
    const Icon = menuOpen ? TopBarBtnOpenSVG : TopBarBtnClosedSVG;
    return (
      <StyledTopBarBtn menuOpen={menuOpen} onClick={this.handleClick} aria-label={btnText}>
        <Icon />
      </StyledTopBarBtn>
    );
  }
}

export default TopBarBtn;
