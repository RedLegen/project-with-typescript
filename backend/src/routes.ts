import { Router } from 'express';
import NameController from './controllers/NameController';

const routes = Router();

routes.get('/names', NameController.index);
routes.post('/names', NameController.create);

export default routes;