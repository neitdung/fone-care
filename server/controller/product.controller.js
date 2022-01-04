const Product = require('../model/product.model')

exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Product(data);
        newDoc.save((err,doc)=>{
            if(err) reject({error:true, message:"Create product failed"});
            else resolve(doc);
        })
    })
}

exports.update = async (data) => {
    Product.findOneAndUpdate(
        { sku: data.sku },
        { $set: data },
        { new: true }
    )
    .then(doc => {
        return doc
    })
    .catch( err => {
        return ({ error: true, message: "Can not update Product"})
    })
}

exports.getAll = async () => {
    return new Promise((resolve,reject)=>{
        Product.find({}, (err,docs)=>{
            if(err) reject({error:true, message:"Get products failed"});
            else resolve(docs);
        })
    })
}

exports.get = async (sku) => {
    return new Promise((resolve,reject)=>{
        Product.find({ sku: sku}, (err,doc)=>{
            if(err) reject({error:true, message:"Get product failed"});
            else resolve(doc);
        })
    })
}

exports.search = async (keyWord) => {
    return new Promise((resolve, reject) => {
        Product.find({$text: {$search: keyWord}})
            .exec(function(err, docs) {
                if(err) reject({error:true, message:"Search product failed"});
                else resolve(docs);
            });
    })
}
