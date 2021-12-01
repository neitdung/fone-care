const controller = require('../controller/brand.controller')
exports.brandResolvers = {
    Query: {
        getAllBrands: (root) => {
            return controller.getAll()
        },
        getBrand: (root, {id} )=>{
            return controller.get(id)
        }
    },
    Mutation:{
        createBrand: (root, { input }) => {
            return controller.create(input)
        },
        updateBrand: (root, { input }) => {
            return controller.update(input)
        },
    }
};