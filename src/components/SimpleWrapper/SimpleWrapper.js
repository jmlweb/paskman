// @flow
import { type Node } from 'react';

type Props = {
  children: Node,
};
const SimpleWrapper = (props: Props) => props.children;

export default SimpleWrapper;
