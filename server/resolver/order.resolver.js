const controller = require('../controller/order.controller')
exports.orderResolvers = {
    Query: {
        getAllOrders: (root) => {
            return controller.getAll()
        },
        getOrder: (root, {id} )=>{
            return controller.get(id)
        }
    },
    Mutation:{
        createOrder: (root, { input }) => {
            return controller.create(input)
        },
        updateOrder: (root, { input }) => {
            return controller.update(input)
        },
    }
};
