const express = require('express');
const CompanyController = require('./controllers/CompanyController');
const ProjectController = require('./controllers/ProjectController');
const  UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/companys', CompanyController.readCompanys);
routes.get('/companys/all', CompanyController.readAll);
routes.post('/companys', CompanyController.create);
routes.get('/companys/:company_id', CompanyController.readByPk);
routes.put('/companys/:company_id', CompanyController.update);
routes.delete('/companys/:company_id', CompanyController.delete);

routes.get('/projects', ProjectController.readAll);
routes.post('/:company_id/projects', ProjectController.create);
routes.get('/:company_id/projects/:project_id', ProjectController.readByPkProject);
routes.get('/:company_id/projects', ProjectController.readByPkCompany);
routes.put('/:company_id/projects/:project_id', ProjectController.update);
routes.delete('/:company_id/projects/:project_id', ProjectController.delete);

routes.get('/users', UserController.readAll);
routes.post('/:company_id/users', UserController.create);
routes.get('/:company_id/users/:user_id', UserController.readByPkUser);
routes.get('/:company_id/users', UserController.readByPkCompany);
routes.put('/:company_id/users/:user_id', UserController.update);
routes.delete('/:company_id/users/:user_id', UserController.delete);

module.exports = routes;