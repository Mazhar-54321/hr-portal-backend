import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './userRoute';
const routes = (): IRouter => {
  router.use('/users', userRoute);

  return router;
};

export default routes;
