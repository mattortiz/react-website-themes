import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const meta = css`
  margin: 0.5em 0 2em;
  font-size: 0.9em;
  display: flex;
  color: #999;
  display: flex;

  [class$='-blog'] & {
    margin-bottom: 1em;
  }

  & span {
    display: flex;
    align-items: center;
    line-height: 1;
    padding-right: 10px;
  }

  & svg {
    margin: 2px 5px 0 0;
  }
`;

export default meta;
