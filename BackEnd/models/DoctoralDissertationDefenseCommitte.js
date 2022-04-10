const mongoose = require('mongoose');

const DoctoralDissertationDefenseCommitteSchema = mongoose.Schema({
    username: { type: 'string', required: true },
    name: { type: 'string', required: true },
    doctoralSchool: { type: 'string', required: true },
    doctoralProgram: { type: 'string', required: true },
    dissertationTitle: { type: 'string', required: true },
    supervisor: { type: 'string', required: true },
    numberOfAnnouncements: {type: 'string', required: true},
    acceptedAnnouncements: { type: 'string', required: true },
    LanguageExams: { type: 'string', required: true},
    priorDiscussion: {type: 'string', required: true},
    doctoralSchoolEvaluation: {type: 'string', required: true},

    //president
    presidentName: { type: 'string', required: true },
    presidentPosition: { type: 'string', required: true },
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
    memberTwoInstitution: { type: 'string', required: true },
    memberTwoDepartment: { type: 'string', required: true },
    memberTwoPostCode: { type: 'string', required: true },
    memberTwoLocation: { type: 'string', required: true },
    memberTwoStreet: { type: 'string', required: true },
    memberTwoEmail: { type: 'string', required: true },

    //memberThree
    memberThreeName: { type: 'string', required: true },
    memberThreePosition: { type: 'string', required: true },
    memberThreeRank: { type: 'string', required: true },
    memberThreeInstitution: { type: 'string', required: true },
    memberThreeDepartment: { type: 'string', required: true },
    memberThreePostCode: { type: 'string', required: true },
    memberThreeLocation: { type: 'string', required: true },
    memberThreeStreet: { type: 'string', required: true },
    memberThreeEmail: { type: 'string', required: true },

    //memberFour
    memberFourName: { type: 'string', required: true },
    memberFourPosition: { type: 'string', required: true },
    memberFourRank: { type: 'string', required: true },
    memberFourInstitution: { type: 'string', required: true },
    memberFourDepartment: { type: 'string', required: true },
    memberFourPostCode: { type: 'string', required: true },
    memberFourLocation: { type: 'string', required: true },
    memberFourStreet: { type: 'string', required: true },
    memberFourEmail: { type: 'string', required: true },

    //ReserveMemberOne
    ReserveMemberOneName: { type: 'string', required: true},
    ReserveMemberOnePosition: { type: 'string', required: true},
    ReserveMemberOneRank: { type: 'string', required: true},
    ReserveMemberOneInstitution: { type: 'string', required:true},
    ReserveMemberOneDepartment: { type: 'string', required: true},
    ReserveMemberOnePostCode: { type: 'string', required: true },
    ReserveMemberOneLocation: { type: 'string', required: true},
    ReserveMemberOneStreet: { type: 'string', required: true},
    ReserveMemberOneEmail: { type: 'string', required: true},

    //ReserveMemberTwo
    ReserveMemberTwoName: { type: 'string', required: true},
    ReserveMemberTwoPosition: { type: 'string', required: true},
    ReserveMemberTwoRank: { type: 'string', required: true},
    ReserveMemberTwoInstitution: { type: 'string', required:true},
    ReserveMemberTwoDepartment: { type: 'string', required: true},
    ReserveMemberTwoPostCode: { type: 'string', required: true },
    ReserveMemberTwoLocation: { type: 'string', required: true},
    ReserveMemberTwoStreet: { type: 'string', required: true},
    ReserveMemberTwoEmail: { type: 'string', required: true},

    //ReviewerOne
    ReviewerOneName: { type: 'string', required: true},
    ReviewerOnePosition: { type: 'string', required: true},
    ReviewerOneRank: { type: 'string', required: true},
    ReviewerOneInstitution: { type: 'string', required: true},
    ReviewerOneDepartment: { type: 'string', required: true},
    ReviewerOnePostCode: { type: 'string', required: true},
    ReviewerOneLocation: { type: 'string', required: true},
    ReviewerOneStreet: { type: 'string', required: true},
    ReviewerOneEmail: { type: 'string', required: true},

    //ReviewerTwo
    ReviewerTwoName: { type: 'string', required: true},
    ReviewerTwoPosition: { type: 'string', required: true},
    ReviewerTwoRank: { type: 'string', required: true},
    ReviewerTwoInstitution: { type: 'string', required: true},
    ReviewerTwoDepartment: { type: 'string', required: true},
    ReviewerTwoPostCode: { type: 'string', required: true},
    ReviewerTwoLocation: { type: 'string', required: true},
    ReviewerTwoStreet: { type: 'string', required: true},
    ReviewerTwoEmail: { type: 'string', required: true},

    //ReserveReviewerOne
    ReserveReviewerOneName: { type: 'string', required: true},
    ReserveReviewerOnePosition: { type: 'string', required: true},
    ReserveReviewerOneRank: { type: 'string', required: true},
    ReserveReviewerOneInstitution: { type: 'string', required: true},
    ReserveReviewerOneDepartment: { type: 'string', required: true},
    ReserveReviewerOnePostCode: { type: 'string', required: true},
    ReserveReviewerOneLocation: { type: 'string', required: true},
    ReserveReviewerOneStreet: { type: 'string', required: true},
    ReserveReviewerOneEmail: { type: 'string', required: true},

    //ReserveReviewerTwo
    ReserveReviewerTwoName: { type: 'string', required: true},
    ReserveReviewerTwoPosition: { type: 'string', required: true},
    ReserveReviewerTwoRank: { type: 'string', required: true},
    ReserveReviewerTwoInstitution: { type: 'string', required: true},
    ReserveReviewerTwoDepartment: { type: 'string', required: true},
    ReserveReviewerTwoPostCode: { type: 'string', required: true},
    ReserveReviewerTwoLocation: { type: 'string', required: true},
    ReserveReviewerTwoStreet: { type: 'string', required: true},
    ReserveReviewerTwoEmail: { type: 'string', required: true},
})

module.exports = mongoose.model('DoctoralDissertationDefenseCommitte', DoctoralDissertationDefenseCommitteSchema);
