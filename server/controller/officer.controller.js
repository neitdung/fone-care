const Officer = require('../model/officer.model')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const FONE_KEY = process.env.FONE_KEY;
const { AuthenticationError, None } = require('apollo-server-express');
  
exports.create = (data) => {
    return new Promise((resolve,reject)=>{
        var newDoc = new Officer(data);
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newDoc.password, salt, (err, hash) => {
                newDoc.password = hash;
                newDoc
                .save((err,doc)=>{
                    if(err) reject(err);
                    else resolve(doc);
                })
            });
        });
    })
}

exports.login = (data) => {
    return new Promise((resolve,reject)=>{
        Officer.findOne({ username: data.username }).then(doc => {
            if (!doc) {
                throw new AuthenticationError('Invalid username or password');
            }
      
            bcrypt.compare(data.password, doc.password).then(isMatch => {
               if (isMatch) {
                  const payload = {
                     id: doc._id,
                     role: doc.role
                  };
                  jwt.sign(payload, FONE_KEY, { expiresIn: 86400 }, (err, token) => {
                     if (err) {
                        throw new None('Error compare password');
                     }
                     resolve({
                        error: false,
                        token: token
                     });
                  });
               } else {
                    throw new AuthenticationError('Invalid username or password');
               }
            });
         });
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