import styled from 'styled-components';
import styledMap from 'styled-map';

const ButtonBar = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: ${styledMap({
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
  })};
`;

export default ButtonBar;
