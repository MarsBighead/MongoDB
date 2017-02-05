var mongoose = require('mongoose');
var moment = require('moment');
var async = require('async');
var configDB = require('./config/database.js');
var db=mongoose.connect(configDB.url);
var Schema = mongoose.Schema;
var person = new Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    birth:{type:Date},
    rank:{type:Number}

});

// mongoose.model(collection,Schema). the collection will turn to the low head letter and multiple names after inserting to the database.
var togerModel = mongoose.model('test',person) 
// Will just hang until mongoose successfully connects
//togerModel.findOne(function(error, result) { /* ... */ });
//var Test = models.Test;
var test = new togerModel();
//var test = new Test();

/*
test.name="Paul";
test.email="Paul.Duan@bleum.com";
test.phone="+86-13817567529";
test.birth=moment().format('YYYY-MM-DD HH:mm:ss');
console.log("Present time: "+ moment().format('YYYY-MM-DD HH:mm:ss'));
console.log("Present timestamp is: "+ Date.now());
test.save(function(err){
    if(err){
        console.log('Save failed'+err);
    }
    console.log('Save successfully!');

});
*/
togerModel.findById("581019a1bd2ec26a668db60f",function(err, docs){
    console.log("Get data from mongoDB ");
    console.log( docs);

    return docs;
});
// var conditions = { name: 'Paul', email:'duanhuiyong@51yunjian.com' },
 var conditions = { name: 'Paul', email:'duanmhy@139.com' },
    update = { 
        $set: {
            email: 'duanhuiyong@51yunjian.com' 
            //email: 'duanmhy@139.com' 
        }
    },
    options = {};

togerModel.update(conditions, update, options, function(err, docs){
    console.log("MongoDB update data docs vs err "+ docs[0]+ " Error "+err);
    console.dir(docs);
});

/*
togerModel.remove(
    { 'name':'Duan Huiyong',
       'phone':'17091831982'
    },
    function(err, docs){
        console.log("MongoDB remove lines docs vs err "+ docs+ " Error "+err);
    }
);
*/
