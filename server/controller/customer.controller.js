const Customer = require('../model/customer.model')
const jwt = require('jsonwebtoken');
const PRIVATE_KEY = process.env.FONE_KEY;

exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Customer(data);
        newDoc.save((err,doc)=>{
            if(err) reject({error:true, message:"Create customer failed"});
            else resolve(doc);
        })
    })
}

exports.update = async (data) => {
    Customer.findOneAndUpdate(
        { _id: data._id },
        { $set: data },
        { new: true }
    )
    .then(doc => {
        return doc
    })
    .catch( err => {
        return ({ error: true, message: "Can not update Customer"})
    })
}

exports.getAll = async () => {
    return new Promise((resolve,reject)=>{
        Customer.find({}, (err,docs)=>{
            if(err) reject({error:true, message:"Get customers failed"});
            else resolve(docs);
        })
    })
}

exports.get = async (id) => {
    return new Promise((resolve,reject)=>{
        Customer.find({ _id: id}, (err,doc)=>{
            if(err) reject({error:true, message:"Get customer failed"});
            else resolve(doc);
        })
    })
}


exports.login = (data) => {
    return new Promise((resolve,reject)=>{
        Customer.findOne( { email: input.email}, (err,doc) => {
            if (err) reject({error: true, message: "There is an error when login with this email and password."});
            else {
                bcrypt.compare(req.body.password, customer.password).then(isMatch => {
                    if (isMatch) {
                       const payload = {
                          customerId: customer._id
                       };
                       jwt.sign(payload, SECRET, { expiresIn: 3600 }, (err, token) => {
                          if (err) {
                             console.log(err);
                          }
                          return res.json({
                             success: true,
                             token: "Bearer " + token
                          });
                       });
                    } else {
                       return res.status(400).json({ password: "Password Incorrect" });
                    }
                 });
            }
        } )
    })
}