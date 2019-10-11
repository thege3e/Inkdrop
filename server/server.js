const express=require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');
const db = require('./db');
//aws devops server cloud
app.get('/:collection', (req,res)=>{
    const collection = req.params.collection;
    db.getDB().collection(collection).find({}).toArray((err,doc)=>{
        if(err) 
            console.log(err);
        else {
            console.log(doc);
            res.json(doc);
        }
    });
})

app.get('/:collection/:id', (req,res)=>{
    const collection = req.params.collection;
    const id = req.params.id
    db.getDB().collection(collection).find({_id: db.getPrimaryKey(id)}).toArray((err,doc)=>{
        if(err) 
            console.log(err);
        else {
            console.log(doc);
            res.json(doc);
        }
    });
})

app.put('/:collection/:id', (req,res)=>{
    const collection = req.params.collection;
    const id = req.params.id;
    const userInput = req.body;
    db.getDB().collection(collection).findOneAndUpdate({_id: db.getPrimaryKey(id)}, {$set: userInput}, {returnOriginal: false}, (err, result) => {
        if(err) 
        console.log(err)
        else 
        console.log(result);
        res.json(result);
    });
})

app.post('/:collection', (req,res)=>{
    const collection = req.params.collection;
    const userInput = req.body;
    db.getDB().collection(collection).insertOne(userInput,(err, result)=>{
        if(err)
        console.log(err);
        else 
        res.json({result: result, document: result.ops[0]});
    })
})

app.delete('/:collection/:id', (req,res)=>{
    const id=req.params.id;
    const collection = req.params.collection;
    db.getDB().collection(collection).findOneAndDelete({_id: db.getPrimaryKey(id)}, (err, result)=>{
        if(err) 
        console.log(err)
        else 
        res.json(result);
    })
})

db.connect((err)=>{
    if(err) {
        console.log('unable to connect to database'+err)
        process.exit(1);
    }
    else {
        app.listen(3000, () => {
            console.log('listening on port 3000');
        }); 
    }
})