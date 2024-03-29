// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  as: 'ProductCategory',
  constraints: false
})
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})
// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag , {
//    though: "ProductTag"
// });
// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   though: {
//     model: ProductTag,
//     unique: false
//   },
//   as: "tag-products"
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
