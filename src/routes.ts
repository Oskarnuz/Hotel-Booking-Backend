import { Application } from 'express';

import healthcheck from './api/healthcheck';
import customer from './api/customer';
import authLocal from './auth/local';
import amenities from './api/amenities';
import bookings from './api/bookings';
import inclusions from './api/inclusions';
import payments from './api/payments';
import policies from './api/policies';
import tags from './api/tags'
// import review from './api/review';
//import rooms from './api/rooms';
//import hotels from './api/hotels';


const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/customer', customer)
  app.use('/auth/local', authLocal)
  app.use('/api/amenities', amenities)
  app.use('/api/bookings', bookings)
  app.use('/api/inclusions', inclusions)
  app.use('/api/payments', payments)
  app.use('/api/policies', policies)
  app.use('/api/tags', tags)
  //app.use('/api/review', review)
  //app.use('/api/rooms', rooms)
  //app.use('/api/hotels', hotels)
}

export default routes