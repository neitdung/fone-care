const Brand = require('../model/brand.model')

exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Brand(data);
        newDoc.save((err,doc)=>{
            if(err) reject(err);
            else resolve(doc);
        })
    })
}

exports.update = async (data) => {
    Brand.findOneAndUpdate(
        { _id: data._id },
        { $set: data },
        { new: true }
    )
    .then(doc => {
        return doc
    })
    .catch( err => {
        return ({ error: true, message: "Can not update Brand"})
    })
}

exports.getAll = async () => {
    return new Promise((resolve,reject)=>{
        Brand.find({}, (err,docs)=>{
            if(err) reject(err);
            else resolve(docs);
        })
    })
}

exports.get = async (id) => {
    return new Promise((resolve,reject)=>{
        Brand.find({ _id: id}, (err,doc)=>{
            if(err) reject(err);
            else resolve(doc);
        })
    })
}
