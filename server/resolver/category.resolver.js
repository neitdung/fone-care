const controller = require('../controller/category.controller')
exports.categoryResolvers = {
    Query: {
        getAllCaterorys: (root) => {
            return controller.getAll()
        },
        getCaterory: (root, {id} )=>{
            return controller.get(id)
        }
    },
    Mutation:{
        createCaterory: (root, { input }) => {
            return controller.create(input)
        },
        updateCategory: (root, { input }) => {
            return controller.update(input)
        },
    }
};
