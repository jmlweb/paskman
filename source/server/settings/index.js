import appHome from '../../../app-home';

export default Object.assign({}, appHome, {
  APP_HOST: '0.0.0.0',
  APP_PORT: 9000,
  APP_NAME: 'Paskman',
  NODE_HOST: '0.0.0.0',
  NODE_PORT: 9000,
  TITLE: 'Paskman: Pomodoro based task management',
  LOG_PARAMS: false, // use `/gif.log/:message` to track client logs.
});
