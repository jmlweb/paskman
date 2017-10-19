// @flow
type ConstantsMode = {
  step: number,
  target: {
    min: number,
    max: number,
  },
};

type Constants = {
  ['working'|'resting']: ConstantsMode;
};

const constants: Constants = {
  working: {
    step: 5,
    target: {
      min: 5,
      max: 60,
    }
  },
  resting: {
    step: 1,
    target: {
      min: 1,
      max: 15,
    }
  },
};

export default constants;
