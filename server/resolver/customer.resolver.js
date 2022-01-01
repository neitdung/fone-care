const controller = require('../controller/customer.controller')
exports.customerResolvers = {
    Query: {
        getAllCustomers: (root) => {
            return controller.getAll()
        },
        getCustomer: (root, {id} )=>{
            return controller.get(id)
        }
    },
    Mutation:{
        createCustomer: (root, { input }) => {
            return controller.create(input)
        },
        updateCustomer: (root, { input }) => {
            return controller.update(input)
        },
        login: (root, {input}) => {
            return controller.login(input);
        }
    }
};
