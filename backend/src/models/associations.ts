import { User,  Order, Product } from "./index"

User.hasMany(Order);
Order.belongsTo(User)

Order.hasMany(Product);