const Officer = require('../model/officer.model')

exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Officer(data);
        newDoc.save((err,doc)=>{
            if(err) reject(err);
            else resolve(doc);
        })
    })
}

exports.update = async (data) => {
    Officer.findOneAndUpdate(
        { _id: data._id },
        { $set: data },
        { new: true }
    )
    .then(doc => {
        return doc
    })
    .catch( err => {
        return ({ error: true, message: "Can not create officer"})
    })
}

exports.getAll = async () => {
    return new Promise((resolve,reject)=>{
        Officer.find({}, (err,docs)=>{
            if(err) reject(err);
            else resolve(docs);
        })
    })
}

exports.get = async (id) => {
    return new Promise((resolve,reject)=>{
        Officer.find({ _id: id}, (err,doc)=>{
            if(err) reject(err);
            else resolve(doc);
        })
    })
}