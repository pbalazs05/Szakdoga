const express = require("express");

const router = express.Router();
const Post = require('../models/DoctoralDissertationDefenseCommitte');
var fs = require('fs');

const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
var cors = require('cors');
router.use(cors());

/**
 * Fájl létrehozást és letöltést kezelő függvény
 * Beolvassa a phd_ved_biz.docx fájlt és az alapján csinál egy újat és bele írja az input adatokat
 */
//function to read a template file and create a new with input data
function createFile(userInputData, username) {
    //const templateFile = fs.readFileSync(path.resolve(__dirname, 'phdTemplate.docx'), 'binary');
    const templateFile = fs.readFileSync(path.resolve('/Users/palba/Documents/Phd_oldal/phd_ved_biz.docx'), 'binary');
    const zip = new PizZip(templateFile);
    try {
        // Attempt to read all the templated tags
        let outputDocument = new Docxtemplater(zip);

        // Set the data we wish to add to the document
        outputDocument.setData(userInputData);

        try {
            // Attempt to render the document (Add data to the template)
            outputDocument.render()

            // Create a buffer to store the output data
            let outputDocumentBuffer = outputDocument.getZip().generate({ type: 'nodebuffer' });

            // Save the buffer to a file
            //fs.writeFileSync(path.resolve(__dirname, 'OUTPUT3.docx'), outputDocumentBuffer);
            fs.writeFileSync(path.resolve('/Users/palba/Documents/Phd_oldal/Documents/' + username + ' ' + 'Doctoral Dissertation Defense Committee.docx'), outputDocumentBuffer)
        }
        catch (error) {
            console.error(`ERROR Filling out Template:`);
            console.error(error)
        }
    } catch (error) {
        console.error(`ERROR Loading Template:`);
        console.error(error);
    }
}

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 * A fájl letöltést kezelő post metódus
 */
router.post('/download', cors({
    exposedHeaders: ['Content-Disposition'],
  }),async (req, res) => {
    try{
        const fileName = req.body.value+' Doctoral Dissertation Defense Committee.docx';
        const fileUrl = 'C:\\Users\\palba\\Documents\\Phd_oldal\\Documents\\'+fileName;
        const stream = fs.createReadStream(fileUrl);
        res.download(fileUrl,fileName,stream);
        res.header({
            'Content-Disposition': `attachment; filename='${fileName}'`,
            'Content-Type': 'application/docx',
        });
        stream.on('error', function (err) {res.end(err);});

        stream.pipe(res);
    } catch (e) {
        console.error(e)
        res.status(500).end();
    }

});

/**
 * Ez a post metódus kapja meg az adatokat a felhasználótól és adja át a createFile függvénynek
 */
router.post('/', async (req, res) => {
    const post = new Post({
        username: req.body.username,

    });

    try {
        const dataToAdd = {
            List: [{
                name: req.body.name,
                doctoralSchool: req.body.doctoralSchool,
                doctoralProgram: req.body.doctoralProgram,
                dissertationTitle:req.body.dissertationTitle,
                supervisor: req.body.supervisor,
                numberOfAnnouncements: req.body.numberOfAnnouncements,
                acceptedAnnouncements: req.body.acceptedAnnouncements,
                LanguageExams: req.body.LanguageExams,
                priorDiscussion: req.body.priorDiscussion,
                doctoralSchoolEvaluation: req.body.doctoralSchoolEvaluation,

                //president
                presidentName: req.body.presidentName,
                presidentPosition: req.body.presidentPosition,
                presidentRank: req.body.presidentRank,
                presidentInstitution: req.body.presidentInstitution,
                presidentDepartment: req.body.presidentDepartment,
                presidentPostCode: req.body.presidentPostCode,
                presidentLocation: req.body.presidentLocation,
                presidentStreet: req.body.presidentStreet,
                presidentEmail: req.body.presidentEmail,

                //reservePresident
                reservePresidentName: req.body.reservePresidentName,
                reservePresidentPosition: req.body.reservePresidentPosition,
                reservePresidentRank: req.body.reservePresidentRank,
                reservePresidentInstitution: req.body.reservePresidentInstitution,
                reservePresidentDepartment: req.body.reservePresidentDepartment,
                reservePresidentPostCode: req.body.reservePresidentPostCode,
                reservePresidentLocation: req.body.reservePresidentLocation,
                reservePresidentStreet: req.body.reservePresidentStreet,
                reservePresidentEmail: req.body.reservePresidentEmail,
                //memberOne
                memberOneName: req.body.memberOneName,
                memberOnePosition: req.body.memberOnePosition,
                memberOneRank: req.body.memberOneRank,
                memberOneInstitution: req.body.memberOneInstitution,
                memberOneDepartment: req.body.memberOneDepartment,
                memberOnePostCode: req.body.memberOnePostCode,
                memberOneLocation: req.body.memberOneLocation,
                memberOneStreet: req.body.memberOneStreet,
                memberOneEmail: req.body.memberOneEmail,
                //memberTwo
                memberTwoName: req.body.memberTwoName,
                memberTwoPosition: req.body.memberTwoPosition,
                memberTwoRank: req.body.memberTwoRank,
                memberTwoInstitution: req.body.memberTwoInstitution,
                memberTwoDepartment: req.body.memberTwoDepartment,
                memberTwoPostCode: req.body.memberTwoPostCode,
                memberTwoLocation: req.body.memberTwoLocation,
                memberTwoStreet: req.body.memberTwoStreet,
                memberTwoEmail: req.body.memberTwoEmail,

                //memberThree
                memberThreeName: req.body.memberThreeName,
                memberThreePosition: req.body.memberThreePosition,
                memberThreeRank: req.body.memberThreeRank,
                memberThreeInstitution: req.body.memberThreeInstitution,
                memberThreeDepartment: req.body.memberThreeDepartment,
                memberThreePostCode: req.body.memberThreePostCode,
                memberThreeLocation: req.body.memberThreeLocation,
                memberThreeStreet: req.body.memberThreeStreet,
                memberThreeEmail: req.body.memberThreeEmail,

                //memberFour
                memberFourName: req.body.memberFourName,
                memberFourPosition: req.body.memberFourPosition,
                memberFourRank: req.body.memberFourRank,
                memberFourInstitution: req.body.memberFourInstitution,
                memberFourDepartment: req.body.memberFourDepartment,
                memberFourPostCode: req.body.memberFourPostCode,
                memberFourLocation: req.body.memberFourLocation,
                memberFourStreet: req.body.memberFourStreet,
                memberFourEmail: req.body.memberFourEmail,

                //ReserveMemberOne
                ReserveMemberOneName: req.body.ReserveMemberOneName,
                ReserveMemberOnePosition: req.body.ReserveMemberOnePosition,
                ReserveMemberOneRank: req.body.ReserveMemberOneRank,
                ReserveMemberOneInstitution: req.body.ReserveMemberOneInstitution,
                ReserveMemberOneDepartment: req.body.ReserveMemberOneDepartment,
                ReserveMemberOnePostCode: req.body.ReserveMemberOnePostCode,
                ReserveMemberOneLocation: req.body.ReserveMemberOneLocation,
                ReserveMemberOneStreet: req.body.ReserveMemberOneStreet,
                ReserveMemberOneEmail: req.body.ReserveMemberOneEmail,

                //ReserveMemberTwo
                ReserveMemberTwoName: req.body.ReserveMemberTwoName,
                ReserveMemberTwoPosition: req.body.ReserveMemberTwoPosition,
                ReserveMemberTwoRank: req.body.ReserveMemberTwoRank,
                ReserveMemberTwoInstitution: req.body.ReserveMemberTwoInstitution,
                ReserveMemberTwoDepartment: req.body.ReserveMemberTwoDepartment,
                ReserveMemberTwoPostCode: req.body.ReserveMemberTwoPostCode,
                ReserveMemberTwoLocation: req.body.ReserveMemberTwoLocation,
                ReserveMemberTwoStreet: req.body.ReserveMemberTwoStreet,
                ReserveMemberTwoEmail: req.body.ReserveMemberTwoEmail,

                //ReviewerOne
                ReviewerOneName: req.body.ReviewerOneName,
                ReviewerOnePosition: req.body.ReviewerOnePosition,
                ReviewerOneRank: req.body.ReviewerOneRank,
                ReviewerOneInstitution: req.body.ReviewerOneInstitution,
                ReviewerOneDepartment: req.body.ReviewerOneDepartment,
                ReviewerOnePostCode: req.body.ReviewerOnePostCode,
                ReviewerOneLocation: req.body.ReviewerOneLocation,
                ReviewerOneStreet: req.body.ReviewerOneStreet,
                ReviewerOneEmail: req.body.ReviewerOneEmail,

                //ReviewerTwo
                ReviewerTwoName: req.body.ReviewerTwoName,
                ReviewerTwoPosition: req.body.ReviewerTwoPosition,
                ReviewerTwoRank: req.body.ReviewerTwoRank,
                ReviewerTwoInstitution: req.body.ReviewerTwoInstitution,
                ReviewerTwoDepartment: req.body.ReviewerTwoDepartment,
                ReviewerTwoPostCode: req.body.ReviewerTwoPostCode,
                ReviewerTwoLocation: req.body.ReviewerTwoLocation,
                ReviewerTwoStreet: req.body.ReviewerTwoStreet,
                ReviewerTwoEmail: req.body.ReviewerTwoEmail,

                //ReserveReviewerOne
                ReserveReviewerOneName: req.body.ReserveReviewerOneName,
                ReserveReviewerOnePosition: req.body.ReserveReviewerOnePosition,
                ReserveReviewerOneRank: req.body.ReserveReviewerOneRank,
                ReserveReviewerOneInstitution: req.body.ReserveReviewerOneInstitution,
                ReserveReviewerOneDepartment: req.body.ReserveReviewerOneDepartment,
                ReserveReviewerOnePostCode: req.body.ReserveReviewerOnePostCode,
                ReserveReviewerOneLocation: req.body.ReserveReviewerOneLocation,
                ReserveReviewerOneStreet: req.body.ReserveReviewerOneStreet,
                ReserveReviewerOneEmail: req.body.ReserveReviewerOneEmail,

                //ReserveReviewerTwo
                ReserveReviewerTwoName: req.body.ReserveReviewerTwoName,
                ReserveReviewerTwoPosition: req.body.ReserveReviewerTwoPosition,
                ReserveReviewerTwoRank: req.body.ReserveReviewerTwoRank,
                ReserveReviewerTwoInstitution: req.body.ReserveReviewerTwoInstitution,
                ReserveReviewerTwoDepartment: req.body.ReserveReviewerTwoDepartment,
                ReserveReviewerTwoPostCode: req.body.ReserveReviewerTwoPostCode,
                ReserveReviewerTwoLocation: req.body.ReserveReviewerTwoLocation,
                ReserveReviewerTwoStreet: req.body.ReserveReviewerTwoStreet,
                ReserveReviewerTwoEmail: req.body.ReserveReviewerTwoEmail,
            },]
        };

        createFile(dataToAdd, req.body.name);
        await post.save();
        res.end();
    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;