import PT from 'prop-types';

export const RoutesPT = PT.arrayOf(PT.shape({
  path: PT.string,
  title: PT.string,
  component: PT.func,
}));

export const SettingsPT = PT.shape({
  target: PT.shape({
    working: PT.number,
    resting: PT.number,
  }).isRequired,
  pauseBetween: PT.bool.isRequired,
  confirmEndingTask: PT.bool.isRequired,
}).isRequired;
