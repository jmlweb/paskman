import * as Immutable from 'immutable';

export default (styles, mq) => {
  const stylesKeys = Object.keys(styles);
  const mqKeys = Object.keys(mq);

  return Immutable.fromJS(styles).merge(
    mqKeys.reduce((process1, mqKey) =>
      Immutable.fromJS(process1).merge(
        stylesKeys.reduce((process2, styleKey) =>
          Immutable.fromJS(process2).merge({
            [`${styleKey}@${mqKey}`]: {
              [`${mq[mqKey]}`]: styles[styleKey],
            },
          }).toJS()
        , process1),
      ).toJS()
    , {}),
  ).toJS();
};
