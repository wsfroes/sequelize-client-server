const db = require("../models/Connection");
const Company = db.companys; 

module.exports = {
    async readAll(req, res) {
        const companys = await Company.findAll({
            include: ["users","projects"],
          });

        return res.json(companys);
    },

    async readCompanys(req, res) {
        const companys = await Company.findAll();

        return res.json(companys);
    },

    async readByPk(req,res) {
        const { id } = req.params;
        console.log("company id: "+ id);
        const companys = await Company.findByPk(id , {
            include: ['users','projects']
        }
        );
        return res.json(companys);
    },

    async create(req,res) {
        const { nameCompany, urlHelp, schema } = req.body;
        const companys = await Company.create({
            nameCompany,
            urlHelp,
            schema,
        });
        return res.json(companys);
    },
    async update(req, res) {
        const { id } = req.params;
        const { nameCompany, schema, urlHelp } = req.body;
        const newCompany = await Company.update({ nameCompany, schema, urlHelp }, {
            where: {
                id: id
            }
        });
        return res.json(newCompany);
    },
    async delete(req, res) {
        const { id } = req.params;
        const company = await Company.destroy({
            where: {
                id: id
            }
        });

        return res.json(company);
    }
};