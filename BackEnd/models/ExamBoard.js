const mongoose = require('mongoose');

const ExamBoardSchema = mongoose.Schema({
    name:{type:String, required:true},
    doctoralSchool:{type:String, required:true},
    doctoralProgram: {type:String, required:true},
    department:{type:String, required:true},
    consultant:{type:String, required:true},
    doctoralTopic: {type:String, required:true},
    examMainSubject: {type:String, required:true},
    examSideSubject: {type:String, required:true},
    creditFulfilled: {type:String, required:true},
})

module.exports=mongoose.model('ExamBoard',ExamBoardSchema);
