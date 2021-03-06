import config from '../config/environment';
import Sequelize from 'sequelize';

const db = new Sequelize(config.sequelize.uri, config.sequelize.options);

export const User = db.import('../api/user/user.model');
export const ExpensePool = db.import('../api/expense-pool/expense-pool.model');
export const Expense = db.import('../api/expense-pool/expense/expense.model');

User.belongsToMany(ExpensePool, { through: 'ExpensePoolUser' });
ExpensePool.belongsToMany(User, { through: 'ExpensePoolUser' });
ExpensePool.hasMany(Expense);
Expense.belongsTo(User);

export default db;
