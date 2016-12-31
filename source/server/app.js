import path from 'path';
import express from 'express';
import noCache from 'connect-cache-control';
import log from './log';
import settings from './settings';

import mainRoute from './routes/main';

const app = express();

app.use(log.requestLogger());

app.get('/log.gif/:message', noCache, log.route());

const staticDir = path.join(settings.APP_HOME, '/static');
const buildDir = path.join(settings.APP_HOME, '/public');

app.use('/public', express.static(buildDir));
app.use('/', express.static(staticDir));

app.use('/', mainRoute);

export default app;
