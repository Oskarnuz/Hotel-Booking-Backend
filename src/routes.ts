import { Application } from 'express';

import healthcheck from './api/healthcheck';
import customer from './api/customer';
import authLocal from './auth/local'

const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/customer', customer)

  app.use('/auth/local', authLocal)
}

export default routes