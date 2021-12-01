const controller = require('../controller/product.controller')
exports.productResolvers = {
    Query: {
        getAllProducts: (root) => {
            return controller.getAll()
        },
        getProduct: (root, {id} )=>{
            return controller.get(id)
        },
        searchProduct: (root, {keyWord}) => {
            return controller.search(keyWord);
        }
    },
    Mutation:{
        createProduct: (root, { input }) => {
            return controller.create(input)
        }
    }
};
