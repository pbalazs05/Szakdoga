const mongoose = require('mongoose');

const ExamBoardSchema = mongoose.Schema({
    username: { type: 'string', required: true },
    name: { type: 'string', required: true },
    doctoralSchool: { type: 'string', required: true },
    doctoralProgram: { type: 'string', required: true },
    courseType: { type: 'string', required: true },
    supervisor: { type: 'string', required: true },
    doctoralTopic: { type: 'string', required: true },
    examMajorSubject: { type: 'string', required: true },
    examMinorSubject: { type: 'string', required: true },
    creditFulfilled: { type: 'string', required: true },

    //president
    presidentName: { type: 'string', required: true },
    presidentPositin: { type: 'string', required: true },
    presidentRank: { type: 'string', required: true },
    presidentInstitution: { type: 'string', required: true },
    presidentDepartment: { type: 'string', required: true },
    presidentPostCode: { type: 'string', required: true },
    presidentLocation: { type: 'string', required: true },
    presidentStreet: { type: 'string', required: true },
    presidentEmail: { type: 'string', required: true },

    //reservePresident
    reservePresidentName: { type: 'string', required: true },
    reservePresidentPosition: { type: 'string', required: true },
    reservePresidentRank: { type: 'string', required: true },
    reservePresidentInstitution: { type: 'string', required: true },
    reservePresidentDepartment: { type: 'string', required: true },
    reservePresidentPostCode: { type: 'string', required: true },
    reservePresidentLocation: { type: 'string', required: true },
    reservePresidentStreet: { type: 'string', required: true },
    reservePresidentEmail: { type: 'string', required: true },

    //memberOne
    memberOneName: { type: 'string', required: true },
    memberOnePosition: { type: 'string', required: true },
    memberOneRank: { type: 'string', required: true },
    memberOneInstitution: { type: 'string', required: true },
    memberOneDepartment: { type: 'string', required: true },
    memberOnePostCode: { type: 'string', required: true },
    memberOneLocation: { type: 'string', required: true },
    memberOneStreet: { type: 'string', required: true },
    memberOneEmail: { type: 'string', required: true },

    //memberTwo
    memberTwoName: { type: 'string', required: true },
    memberTwoPosition: { type: 'string', required: true },
    memberTwoRank: { type: 'string', required: true },
    memberTwoIntitution: { type: 'string', required: true },
    memberTwoDepartment: { type: 'string', required: true },
    memberTwoPostCode: { type: 'string', required: true },
    memberTwoLocation: { type: 'string', required: true },
    memberTwoStreet: { type: 'string', required: true },
    memberTwoEmail: { type: 'string', required: true },

    //SubstituteOne
    substituteOneName: { type: 'string', required: true },
    substituteOnePosition: { type: 'string', required: true },
    substituteOneRank: { type: 'string', required: true },
    substituteOneInstitution: { type: 'string', required: true },
    substituteOneDepartment: { type: 'string', required: true },
    substituteOnePostCode: { type: 'string', required: true },
    substituteOneLocation: { type: 'string', required: true },
    substituteOneStreet: { type: 'string', required: true },
    substituteOneEmail: { type: 'string', required: true },

    //SubstituteTwo
    substituteTwoName: { type: 'string', required: true },
    substituteTwoPosition: { type: 'string', required: true },
    substituteTwoRank: { type: 'string', required: true },
    substituteTwoIntitution: { type: 'string', required: true },
    substituteTwoDepartment: { type: 'string', required: true },
    substituteTwoPostCode: { type: 'string', required: true },
    substituteTwoLocation: { type: 'string', required: true },
    substituteTwoStreet: { type: 'string', required: true },
    substituteTwoEmail: { type: 'string', required: true },

    //expertOne
    expertOneName: { type: 'string', required: true },
    expertOnePosition: { type: 'string', required: true },
    expertOneRank: { type: 'string', required: true },
    expertOneInstitution: { type: 'string', required: true },
    expertOneDepartment: { type: 'string', required: true },
    expertOnePostCode: { type: 'string', required: true },
    expertOneLocation: { type: 'string', required: true },
    expertOneStreet: { type: 'string', required: true },
    expertOneEmail: { type: 'string', required: true },

    //experTwo
    expertTwoName: { type: 'string', required: true },
    expertTwoPosition: { type: 'string', required: true },
    expertTwoRank: { type: 'string', required: true },
    expertTwoInstitution: { type: 'string', required: true },
    expertTwoDepartment: { type: 'string', required: true },
    expertTwoPostCode: { type: 'string', required: true },
    expertTwoLocation: { type: 'string', required: true },
    expertTwoStreet: { type: 'string', required: true },
    expertTwoEmail: { type: 'string', required: true },
})

module.exports = mongoose.model('ExamBoard', ExamBoardSchema);
