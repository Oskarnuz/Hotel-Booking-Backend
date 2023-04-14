import { Application } from 'express';

import healthcheck from './api/healthcheck';
import users from './api/users';
import authLocal from './auth/local';
import amenities from './api/amenities';
import bookings from './api/bookings';
import inclusions from './api/inclusions';
import payments from './api/payments';
import policies from './api/policies';
import tags from './api/tags'
import reviews from './api/reviews';
import rooms from './api/rooms';
import hotels from './api/hotels';
import roles from './api/roles'


const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/users', users)
  app.use('/auth/local', authLocal)
  app.use('/api/amenities', amenities)
  app.use('/api/bookings', bookings)
  app.use('/api/inclusions', inclusions)
  app.use('/api/payments', payments)
  app.use('/api/policies', policies)
  app.use('/api/tags', tags)
  app.use('/api/reviews', reviews)
  app.use('/api/rooms', rooms)
  app.use('/api/hotels', hotels)
  app.use('/api/roles', roles)
}

export default routes