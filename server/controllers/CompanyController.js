const models = require("../config/db");
const db = require("../models/CreateInit");
const Company = db.companys;

console.log('\x1b[40m\x1b[31m%s\x1b[0m', Company);
console.log('\x1b[40m\x1b[31m%s\x1b[0m', db);

module.exports = {

    async readAll(req, res) {
        const companys = await Company.findAll({
            include: ["users", "projects"],
        });

        return res.json(companys);
    },

    async readCompanys(req, res) {
        const companys = await Company.findAll();

        return res.json(companys);
    },

    async readByPk(req, res) {
        const { company_id } = req.params;
        const companys = await Company.findByPk(company_id, {
            include: ['users', 'projects']
        }
        );
        //console.log(companys.schema)
        return res.json(companys);
    },

    async create(req, res) {
        const { nameCompany, urlHelp, schema } = req.body;
        // const company = await Company.findall();
        // if(!company){
        //     return res.status(400).json({error: 'Company not found' });
        // }
        const companys = await Company.create({
            nameCompany,
            urlHelp,
            schema,
        });
        console.log('\x1b[40m\x1b[32m%s\x1b[0m','Company created');
        
        const createSchema = require('../models/CreateSchema');
        console.log('\x1b[40m\x1b[33m%s\x1b[0m', companys.schema);
        //teste = res.json(companys);
        //console.log('\x1b[40m\x1b[33m%s\x1b[0m', teste);
        module.exports  = companys.schema;
        createSchema(schema);
        return res.json(companys);
    },
    async update(req, res) {
        const { company_id } = req.params;
        const { nameCompany, urlHelp } = req.body;
        const newCompany = await Company.update({ nameCompany, urlHelp }, {
            where: {
                id: company_id
            }
        });
        console.log('\x1b[40m\x1b[33m%s\x1b[0m', 'Company updated');
        return res.json(newCompany);
    },
    async delete(req, res) {
        const { company_id } = req.params;
        const schema = await Company.findByPk(company_id);
        const company = await Company.destroy({
            where: {
                id: company_id
            }
        });
        console.log('\x1b[40m\x1b[31m%s\x1b[0m', 'Company deleted');
        models.sequelize.dropSchema(schema.schema).then(() => { });
        console.log('\x1b[40m\x1b[31m%s\x1b[0m', 'Schema deleted');

        return res.json(company);
    }
};