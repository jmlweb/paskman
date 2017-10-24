// @flow
import styled from 'styled-components';
import styledMap from 'styled-map';

const ButtonBar: Function = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: ${styledMap({
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    justify: 'justify-content',
  })};
`;

export default ButtonBar;
