const db = require('../models/CreateSchema');
const User = db.users; 
const Company = db.companys;
console.log('\x1b[40m\x1b[31m%s\x1b[0m', User);
console.log('\x1b[40m\x1b[31m%s\x1b[0m', Company);
 
module.exports = {
    async readAll(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },
    async readByPkUser(req,res) {
        const { user_id } = req.params;
        const users = await User.findByPk(user_id);
        return res.json(users);
    },
    async readByPkCompany(req,res) {
        const { company_id } = req.params;
        const company = await Company.findByPk(company_id);
        if(!company){
            return res.status(400).json({error: 'Company not exist' });
        }
        const companys = await Company.findByPk(company_id , {
            include: { association: 'users'}
        }
        );
        return res.json(companys.users);
    },
    async create(req, res) {
        const { company_id } = req.params;
        const { nameUser, email, password } = req.body;
        const company = await Company.findByPk(company_id);
        if(!company){
            return res.status(400).json({error: 'Company not found' });
        }
        const user = await User.create({ 
            nameUser, 
            email, 
            password, 
            companyId: company_id 
        });
        console.log('\x1b[40m\x1b[32m%s\x1b[0m','User created');
        return res.json(user);
    },
    async update(req, res) {
        const { company_id } = req.params;
        const { user_id } = req.params;
        const { nameUser, email, password } = req.body;
        const company = await Company.findByPk(company_id);
        const user = await User.findByPk(user_id);
        if(company.id!==user.companyId){
            return res.status(400).json({error: 'User not found' });
        }
        const updateUser = await User.update({ 
            nameUser,
            email,
            password
         }, {
            where: {
                id: user_id
            }
        });
        console.log('\x1b[40m\x1b[33m%s\x1b[0m','User updated');
        return res.json(updateUser);
    },
    async delete(req, res) {
        const { user_id } = req.params;
        const { company_id } = req.params;
        const searchCompany = await Company.findByPk(company_id);
        const searchUser = await User.findByPk(user_id);
        if(searchCompany.id!==searchUser.companyId){
            return res.status(400).json({error: 'User not found' });
        }
        const user = await User.destroy({
            where: {
                id: user_id
            }
        });
        console.log('\x1b[40m\x1b[31m%s\x1b[0m','User deleted');
        return res.json(user);
    }
};