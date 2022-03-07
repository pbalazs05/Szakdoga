const express = require("express");

const router = express.Router();
const Post = require('../models/ExamBoard');
var  fs = require('fs');

const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

//function to read a template file and create a new with input data
function createFile(data,username){
    //const templateFile = fs.readFileSync(path.resolve(__dirname, 'phdTemplate.docx'), 'binary');
    const templateFile = fs.readFileSync(path.resolve('/Users/palba/Documents/Phd_oldal/phdTemplate.docx'), 'binary');
    const zip = new PizZip(templateFile);
    try {
        // Attempt to read all the templated tags
        let outputDocument = new Docxtemplater(zip);

        //const dataToAdd = {data};

        // Set the data we wish to add to the document
        outputDocument.setData(data);

        try {
            // Attempt to render the document (Add data to the template)
            outputDocument.render()

            // Create a buffer to store the output data
            let outputDocumentBuffer = outputDocument.getZip().generate({ type: 'nodebuffer' });

            // Save the buffer to a file
            //fs.writeFileSync(path.resolve(__dirname, 'OUTPUT3.docx'), outputDocumentBuffer);
            fs.writeFileSync(path.resolve('/Users/palba/Documents/Phd_oldal/Documents/'+username+' Examination Board Creating.docx'),outputDocumentBuffer)
        }
        catch (error) {
            console.error(`ERROR Filling out Template:`);
            console.error(error)
        }
    } catch(error) {
        console.error(`ERROR Loading Template:`);
        console.error(error);
    }
}


router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//submits a post
router.post('/', async (req,res)=>{
    const post = new Post ({
        name: req.body.name,
        doctoralSchool: req.body.doctoralSchool,
        doctoralProgram: req.body.doctoralProgram,
        department: req.body.department,
        consultant: req.body.consultant,
        doctoralTopic: req.body.doctoralTopic,
        examMainSubject: req.body.examMainSubject,
        examSideSubject: req.body.examSideSubject,
        creditFulfilled: req.body.creditFulfilled
    });

    try{
        const datatoAdd={
            List:[{
                name: post.name,
                doctoralSchool: post.doctoralSchool + " Tudományok Doktori Iskola",
                doctoralProgram: post.doctoralProgram,
                department: post.department,
                consultant: post.consultant,
                doctoralTopic: post.doctoralTopic,
                examMainSubject: post.examMainSubject,
                examSideSubject: post.examSideSubject,
                creditFulfilled: post.creditFulfilled,
                //president
                presidentName: req.body.presidentName,
                presidentPositin: req.body.presidentPositin,
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
                memberTwoIntitution: req.body.memberTwoIntitution,
                memberTwoDepartment: req.body.memberTwoDepartment,
                memberTwoPostCode: req.body.memberTwoPostCode,
                memberTwoLocation: req.body.memberTwoLocation,
                memberTwoStreet: req.body.memberTwoStreet,
                memberTwoEmail: req.body.memberTwoEmail,
                //SubstituteOne
                substituteOneName: req.body.substituteOneName,
                substituteOnePosition: req.body.substituteOnePosition,
                substituteOneRank: req.body.substituteOneRank,
                substituteOneInstitution: req.body.substituteOneInstitution,
                substituteOneDepartment: req.body.substituteOneDepartment,
                substituteOnePostCode: req.body.substituteOnePostCode,
                substituteOneLocation: req.body.substituteOneLocation,
                substituteOneStreet: req.body.substituteOneStreet,
                substituteOneEmail: req.body.substituteOneEmail,
                //SubstituteTwo
                substituteTwoName: req.body.substituteTwoName,
                substituteTwoPosition: req.body.substituteTwoPosition,
                substituteTwoRank: req.body.substituteTwoRank,
                substituteTwoIntitution: req.body.substituteTwoIntitution,
                substituteTwoDepartment: req.body.substituteTwoDepartment,
                substituteTwoPostCode: req.body.substituteTwoPostCode,
                substituteTwoLocation: req.body.substituteTwoLocation,
                substituteTwoStreet: req.body.substituteTwoStreet,
                substituteTwoEmail: req.body.substituteTwoEmail,
                //expertOne
                expertOneName: req.body.expertOneName,
                expertOnePosition: req.body.expertOnePosition,
                expertOneRank: req.body.expertOneRank,
                expertOneInstitution: req.body.expertOneInstitution,
                expertOneDepartment: req.body.expertOneDepartment,
                expertOnePostCode: req.body.expertOnePostCode,
                expertOneLocation: req.body.expertOneLocation,
                expertOneStreet: req.body.expertOneStreet,
                expertOneEmail: req.body.expertOneEmail,
                //experTwo
                expertTwoName: req.body.expertTwoName,
                expertTwoPosition: req.body.expertTwoPosition,
                expertTwoRank: req.body.expertTwoRank,
                expertTwoInstitution: req.body.expertTwoInstitution,
                expertTwoDepartment: req.body.expertTwoDepartment,
                expertTwoPostCode: req.body.expertTwoPostCode,
                expertTwoLocation: req.body.expertTwoLocation,
                expertTwoStreet: req.body.expertTwoStreet,
                expertTwoEmail: req.body.expertTwoEmail,
            },]
        };
        createFile(datatoAdd,req.body.username);
        await post.save();
        res.end();
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;