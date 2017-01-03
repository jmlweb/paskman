import path from 'path';
import express from 'express';
import noCache from 'connect-cache-control';
import log from './log';
import settings from './settings';

import mainRoute from './routes/main';

const app = express();

app.use(log.requestLogger());

app.get('/log.gif/:message', noCache, log.route());

const buildDir = path.join(settings.APP_HOME, '/public');
app.use('/', express.static(buildDir));

app.use('/', mainRoute);

export default app;
