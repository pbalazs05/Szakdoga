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

    //president
    presidentName: {type:String, required:true},
    presidentPositin: {type:String, required:true},
    presidentRank: {type:String, required:true},
    presidentInstitution: {type:String, required:true},
    presidentDepartment: {type:String, required:true},
    presidentPostCode: {type:String, required:true},
    presidentLocation: {type:String, required:true},
    presidentStreet: {type:String, required:true},
    presidentEmail: {type:String, required:true},

    //reservePresident
    reservePresidentName: {type:String, required:true},
    reservePresidentPosition: {type:String, required:true},
    reservePresidentRank: {type:String, required:true},
    reservePresidentInstitution: {type:String, required:true},
    reservePresidentDepartment: {type:String, required:true},
    reservePresidentPostCode: {type:String, required:true},
    reservePresidentLocation: {type:String, required:true},
    reservePresidentStreet: {type:String, required:true},
    reservePresidentEmail: {type:String, required:true},

    //memberOne
    memberOneName: {type:String, required:true},
    memberOnePosition: {type:String, required:true},
    memberOneRank: {type:String, required:true},
    memberOneInstitution: {type:String, required:true},
    memberOneDepartment: {type:String, required:true},
    memberOnePostCode: {type:String, required:true},
    memberOneLocation: {type:String, required:true},
    memberOneStreet: {type:String, required:true},
    memberOneEmail: {type:String, required:true},

    //memberTwo
    memberTwoName: {type:String, required:true},
    memberTwoPosition: {type:String, required:true},
    memberTwoRank: {type:String, required:true},
    memberTwoIntitution: {type:String, required:true},
    memberTwoDepartment: {type:String, required:true},
    memberTwoPostCode: {type:String, required:true},
    memberTwoLocation: {type:String, required:true},
    memberTwoStreet: {type:String, required:true},
    memberTwoEmail: {type:String, required:true},

    //SubstituteOne
    substituteOneName: {type:String, required:true},
    substituteOnePosition: {type:String, required:true},
    substituteOneRank: {type:String, required:true},
    substituteOneInstitution: {type:String, required:true},
    substituteOneDepartment: {type:String, required:true},
    substituteOnePostCode: {type:String, required:true},
    substituteOneLocation: {type:String, required:true},
    substituteOneStreet: {type:String, required:true},
    substituteOneEmail: {type:String, required:true},

    //SubstituteTwo
    substituteTwoName: {type:String, required:true},
    substituteTwoPosition: {type:String, required:true},
    substituteTwoRank: {type:String, required:true},
    substituteTwoIntitution: {type:String, required:true},
    substituteTwoDepartment: {type:String, required:true},
    substituteTwoPostCode: {type:String, required:true},
    substituteTwoLocation: {type:String, required:true},
    substituteTwoStreet: {type:String, required:true},
    substituteTwoEmail: {type:String, required:true},

    //expertOne
    expertOneName: {type:String, required:true},
    expertOnePosition: {type:String, required:true},
    expertOneRank: {type:String, required:true},
    expertOneInstitution: {type:String, required:true},
    expertOneDepartment: {type:String, required:true},
    expertOnePostCode: {type:String, required:true},
    expertOneLocation: {type:String, required:true},
    expertOneStreet: {type:String, required:true},
    expertOneEmail: {type:String, required:true},

    //experTwo
    expertTwoName: {type:String, required:true},
    expertTwoPosition: {type:String, required:true},
    expertTwoRank: {type:String, required:true},
    expertTwoInstitution: {type:String, required:true},
    expertTwoDepartment: {type:String, required:true},
    expertTwoPostCode: {type:String, required:true},
    expertTwoLocation: {type:String, required:true},
    expertTwoStreet: {type:String, required:true},
    expertTwoEmail: {type:String, required:true},
})

module.exports=mongoose.model('ExamBoard',ExamBoardSchema);
