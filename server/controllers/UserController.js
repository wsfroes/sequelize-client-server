const db = require('../models/Connection');
const User = db.users; 
const Company = db.companys;
 

module.exports = {
    async readAll(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },
    async readByPkUser(req,res) {
        const { id } = req.params;
        const users = await User.findByPk(id);
        return res.json(users);
    },
    async readByPkCompany(req,res) {
        const { id } = req.params;
        const company = await Company.findByPk(id);
        if(!company){
            return res.status(400).json({error: 'Company not exist' });
        }
        const companys = await Company.findByPk(id , {
            include: { association: 'users'}
        }
        );
        return res.json(companys.users);
    },
    async create(req, res) {
        const { id } = req.params;
        const { nameUser, email, password } = req.body;
        const company = await Company.findByPk(id);
        if(!company){
            return res.status(400).json({error: 'Company not found' });
        }
        const user = await User.create({ 
            nameUser, 
            email, 
            password, 
            companyId: id 
        });
        console.log('\x1b[40m\x1b[32m%s\x1b[0m','User created');
        return res.json(user);
    },
    async update(req, res) {
        const { id } = req.params;
        const { nameUser, email, password } = req.body;
        const updateUser = await User.update({ 
            nameUser,
            email,
            password
         }, {
            where: {
                id: id
            }
        });
        console.log('\x1b[40m\x1b[33m%s\x1b[0m','User updated');
        return res.json(updateUser);
    },
    async delete(req, res) {
        const { id } = req.params;
        const user = await User.destroy({
            where: {
                id: id
            }
        });
        console.log('\x1b[40m\x1b[31m%s\x1b[0m','User deleted');
        return res.json(user);
    }
};