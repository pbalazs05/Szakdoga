const express = require("express");

const router = express.Router();
const Post = require('../models/ExamBoard');
var  fs = require('fs');

const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

//function to read a template file and create a new with input data
function createFile(data){
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
            fs.writeFileSync(path.resolve('/Users/palba/Documents/Phd_oldal/Documents/output2.docx'),outputDocumentBuffer)
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
                    creditFulfilled: post.creditFulfilled
                },
            ]
        };

        createFile(datatoAdd);
       // await post.save();
        res.end();
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;