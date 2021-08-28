const db = require("../models/Connection");
const Project = db.projects;
const Company = db.companys;
 

module.exports = {
    async readAll(req, res) {
        const projects = await Project.findAll();

        return res.json(projects);
    },
    async readByPkProject(req,res) {
        const { id } = req.params;
        const projects = await Project.findByPk(id);
        return res.json(projects);
    },
    async readByPkCompany(req,res) {
        const { id } = req.params;
        const company = await Company.findByPk(id);
        if(!company){
            return res.status(400).json({error: 'Company not exist' });
        }
        const companys = await Company.findByPk(id , {
            include: { association: 'projects'}
        }
        );
        return res.json(companys.projects);
    },
    async create(req, res) {
        const { id } = req.params;
        const { nameProject } = req.body;
        const company = await Company.findByPk(id);
        if(!company){
            return res.status(400).json({error: 'Company not exist' });
        }
        const project = await Project.create({ nameProject, companyId: id });
        console.log('\x1b[40m\x1b[32m%s\x1b[0m','Project created');
        return res.json(project);
    },
    async update(req, res) {
        const { id } = req.params;
        const { nameProject } = req.body;
        const updateProject = await Project.update({ nameProject }, {
            where: {
                id: id
            }
        });
        console.log('\x1b[40m\x1b[33m%s\x1b[0m','Project updated');
        return res.json(updateProject);
    },
    async delete(req, res) {
        const { id } = req.params;
        const project = await Project.destroy({
            where: {
                id: id
            }
        });
        console.log('\x1b[40m\x1b[31m%s\x1b[0m','Project deleted');
        return res.json(project);
    }
};