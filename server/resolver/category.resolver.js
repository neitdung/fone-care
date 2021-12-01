const controller = require('../controller/category.controller')
exports.categoryResolvers = {
    Query: {
        getAllCategories: (root) => {
            return controller.getAll()
        },
        getCategory: (root, {id} )=>{
            return controller.get(id)
        }
    },
    Mutation:{
        createCategory: (root, { input }) => {
            return controller.create(input)
        },
        updateCategory: (root, { input }) => {
            return controller.update(input)
        },
    }
};
