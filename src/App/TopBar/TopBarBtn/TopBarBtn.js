import React, { PureComponent } from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import styledMap from 'styled-map';
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
  transform: ${styledMap({
    menuOpen: 'rotate(-90deg)',
    default: 'rotate(-180deg)',
  })};
  transition: all 0.2s ${timings.easeOutQuad};
  width: 12vh;
  &:active {
    opacity: 0.3;
  }
`;

class TopBarBtn extends PureComponent {
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

TopBarBtn.defaultProps = {
  menuOpen: false,
};

TopBarBtn.propTypes = {
  menuOpen: PT.bool,
  toggleMenu: PT.func.isRequired,
};

export default TopBarBtn;
