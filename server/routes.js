const express = require('express');
const CompanyController = require('./controllers/CompanyController');
const ProjectController = require('./controllers/ProjectController');
const  UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/companys', CompanyController.readCompanys);
routes.get('/companys/all', CompanyController.readAll);
routes.post('/companys', CompanyController.create);
routes.get('/companys/:id', CompanyController.readByPk);
routes.put('/companys/:id', CompanyController.update);
routes.delete('/companys/:id', CompanyController.delete);

routes.get('/projects', ProjectController.readAll);
routes.post('/projects/:id', ProjectController.create);
routes.get('/projects/:id', ProjectController.readByPkProject);
routes.get('/:id/projects', ProjectController.readByPkCompany);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);

routes.get('/users', UserController.readAll);
routes.post('/users/:id', UserController.create);
routes.get('/users/:id', UserController.readByPkUser);
routes.get('/:id/users', UserController.readByPkCompany);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;