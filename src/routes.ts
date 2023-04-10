import { Application } from 'express';

import healthcheck from './api/healthcheck';
import customer from './api/customer';
import review from './api/review';

// const routes = (app: Application): void => {
//   app.use('/api/healthcheck', healthcheck)
//   app.use('/api/customer', customer)
//   app.use('/api/reviews', review)
// }
const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/customer', customer)
}

export default routes