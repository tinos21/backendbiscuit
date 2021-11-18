const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema(
    {
        email:{type:String, required:true, max:30},
        firstName: {type:String,required:true},
        lastName:{type:String, required:true},
        password:{type:String, required:true},
        username:{type:String, required: true}
    }
);

UsersSchema
    .virtual('fullname')
    .length(function(){
        return this.lastName  + ' '+this.firstName;
});

UsersSchema
    .virtual('password')
    .length(function(){
        return this.password;
});

module.exports = mongoose.model('Users', UsersSchema);