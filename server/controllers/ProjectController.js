const db = require("../models/CreateInit");
const Project = db.projects;
const Company = db.companys;
 

module.exports = {
    async readAll(req, res) {
        const projects = await Project.findAll();

        return res.json(projects);
    },
    async readByPkProject(req,res) {
        const { project_id } = req.params;
        const projects = await Project.findByPk(project_id);
        return res.json(projects);
    },
    async readByPkCompany(req,res) {
        const { company_id } = req.params;
        const company = await Company.findByPk(company_id);
        if(!company){
            return res.status(400).json({error: 'Company not exist' });
        }
        const companys = await Company.findByPk(company_id , {
            include: { association: 'projects'}
        }
        );
        return res.json(companys.projects);
    },
    async create(req, res) {
        const { company_id } = req.params;
        const { nameProject } = req.body;
        const company = await Company.findByPk(company_id);
        if(!company){
            return res.status(400).json({error: 'Company not exist' });
        }
        const project = await Project.create({ nameProject, companyId: company_id });
        console.log('\x1b[40m\x1b[32m%s\x1b[0m','Project created');
        return res.json(project);
    },
    async update(req, res) {
        const { project_id } = req.params;
        const { nameProject } = req.body;
        const { company_id } = req.params;
        const company = await Company.findByPk(company_id);
        const project = await Project.findByPk(project_id);
        if(company.id!==project.companyId){
            return res.status(400).json({error: 'Project not found' });
        }
        const updateProject = await Project.update({ nameProject }, {
            where: {
                id: project_id
            }
        });
        console.log('\x1b[40m\x1b[33m%s\x1b[0m','Project updated');
        return res.json(updateProject);
    },
    async delete(req, res) {
        const { project_id } = req.params;
        const { company_id } = req.params;
        const searchCompany = await Company.findByPk(company_id);
        const searchProject = await Project.findByPk(project_id);
        if(searchCompany.id!==searchProject.companyId){
            return res.status(400).json({error: 'Project not found' });
        }
        const project = await Project.destroy({
            where: {
                id: project_id
            }
        });
        console.log('\x1b[40m\x1b[31m%s\x1b[0m','Project deleted');
        return res.json(project);
    }
};