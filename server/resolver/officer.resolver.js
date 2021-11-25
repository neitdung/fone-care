const controller = require('../controller/officer.controller')
exports.officerResolvers = {
    Query: {
        getAllOfficers: (root) => {
            return controller.getAll()
        },
        getOfficer: (root, {id} )=>{
            return controller.get(id)
        }
    },
    Mutation:{
        createOfficer: (root, { input }) => {
            return controller.create(input)
        }
    }
};