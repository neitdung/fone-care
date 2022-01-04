const Category = require('../model/category.model')

exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Category(data);
        newDoc.save((err,doc)=>{
            if(err) {
                reject({error:true, message:"Create category failed"});
            }
            Category.populate(doc, {path:"parentCate"}, function(err, doc) { resolve(doc) });
        })
    })
}

exports.update = async (data) => {
    return new Promise((resolve,reject)=>{

    Category.findOneAndUpdate(
        { _id: data._id },
        { $set: data },
        { new: true }
    )
    .populate("parentCate")
    .then(doc => {
        resolve(doc)
    })
    .catch(err => {
        reject ({ error: true, message: "Can not update Category"})
    })
    })
}

exports.getAll = async () => {
    return new Promise((resolve,reject)=>{
        Category.find({})
        .populate("parentCate")
        .exec(function (err, docs) {
            if(err) reject({error:true, message:"Get officers failed"});
            else resolve(docs);
        });
    })
}

exports.get = async (id) => {
    return new Promise((resolve,reject)=>{
        Category.findById(id)
        .populate("parentCate")
        .exec(function (err, doc) {
            if(err) reject({error:true, message:"Get officer failed"});
            else resolve(doc);
        });
    })
}
