var MongoClient=require('mongodb').MongoClient,format=require('util').format;
const ObjectId=require('mongodb').ObjectID;
const dbname='Inkdrop';
const url = 'mongodb://localhost:27017'
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const state = {
    db: null
};
const connect = (cb) => {
    if(state.db) 
        cb();
    else {
        MongoClient.connect(url, mongoOptions, (err, client) =>{
            if(err) 
                cb(err);
            else {
                state.db=client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectId(_id);
}

const getDB = () => {
    return state.db;
}

module.exports = {getDB, connect, getPrimaryKey};
