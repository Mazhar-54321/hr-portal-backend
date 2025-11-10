import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './userRoute';
import employeeRoute from './employeeRoute';
import roleRoute from './roleRoute';
const routes = (): IRouter => {
  router.use('/users', userRoute);
  router.use('/employees',employeeRoute);
  router.use('/roles',roleRoute);
  return router;
};

export default routes;
