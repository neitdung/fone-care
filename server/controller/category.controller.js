const Category = require('../model/category.model')

exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Category(data);
        newDoc.save((err,doc)=>{
            if(err) reject(err);
            else resolve(doc);
        })
    })
}

exports.update = async (data) => {
    Category.findOneAndUpdate(
        { _id: data._id },
        { $set: data },
        { new: true }
    )
    .then(doc => {
        return doc
    })
    .catch( err => {
        return ({ error: true, message: "Can not update Category"})
    })
}

exports.getAll = async () => {
    return new Promise((resolve,reject)=>{
        Category.find({}, (err,docs)=>{
            if(err) reject(err);
            else resolve(docs);
        })
    })
}

exports.get = async (id) => {
    return new Promise((resolve,reject)=>{
        Category.find({ _id: id}, (err,doc)=>{
            if(err) reject(err);
            else resolve(doc);
        })
    })
}
