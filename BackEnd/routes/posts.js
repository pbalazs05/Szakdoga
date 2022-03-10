if (process.env.NODE_ENV !== 'production') { //ha a környezet nem lenne töltenne be
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const PostKey = require('../models/KeyAndId')
const Str = require('@supercharge/strings');
const SendEmail = require('./EmailSender');
const nameAndEmail = require('../models/NameAndEmail');
const users = require('../models/Users');
const mongoose = require('mongoose');
const semester = require('../models/Semester');
const db = mongoose.connection;


//get back all the posts
/*router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});*/


//summits a post
router.post('/', async (req, res) => {
    const post = new Post({
        user: req.body.user,
        subject: req.body.targy,
        teacher: req.body.oktato,
    });

    try {
        const sem = await semester.findOne();
        var semesterStartDate = new Date(sem.startDate);
        const incomingPost = await Post.findOne({ teacher: post.teacher, user: post.user, subject: post.subject, date: { $gte: semesterStartDate } });
        const teacherName = await nameAndEmail.findOne({ TeacherName: post.teacher })
        if (incomingPost === null && teacherName !== null) {
            const savedPost = await post.save();
            const Key = new PostKey({
                postid: savedPost._id,
                key: Str.random(20),
            });

            const Student = await USERS.findOne({ _id: post.user })
            Key.save();
            const url = `
            Tisztelt ${post.teacher}!<br><br>
            ${Student.lastname} ${Student.firstname} Kérvényezte a(z) ${post.subject} tárgy felvételének elfogadását.<br>
            A nyilatkozattételt megteheti az alábbi linken.
            <p>https://localhost:3000/subjectupdate?uid=${post.user}&pid=${post._id}&aid=${teacherName._id}&key=${Key.key}</p>`
            const Subject = "Tárgyfelvétel";
            SendEmail(url, teacherName.TeacherEmail, Subject);
            const urlS = `
            Tisztelt ${Student.supervisor}!<br><br>
            Ezúton tájékoztatjuk, hogy ${Student.lastname} ${Student.firstname} hallgató, az ön témavezetettje felvételre jelölte a ${post.teacher} oktató, ${post.subject} című tárgyát.<br>
            Ez a levél csak tájékoztatás jellegű, az adminisztrációval kapcsolatban önnek nincs teendője.<br>
            ------------------------------------------------------------------------------------------------
            `
            const supervisorName = await nameAndEmail.findOne({ _id: Student.supervisorID });
            const SubjectS = "Témavezető értesítés";
            SendEmail(urlS, supervisorName.TeacherEmail, SubjectS);
            res.json(savedPost);
        } else {
            throw 'Subject Registration Error!';
        }
    } catch (err) {
        res.status(422).send({ message: err })
    }
});


//specific post
router.get('/:user', async (req, res) => {
    const sem = await semester.findOne();
    var semesterStartDate = new Date(sem.startDate);
    try {
        const post = await Post.find({ user: req.params.user, date: { $gt: semesterStartDate } })
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }

});

router.get('/:subject/notadministrated', async (req, res) => {
    try {
        const post = await Post.find({ state: 1, tstatus: "Accepted" });
        let ids = []

        var waitforgetArray = new Promise((resolve, reject) => {
            for (i = 0; i < post.length; i++) {
                ids[i] = mongoose.Types.ObjectId(post[i].user);
            }
            resolve();
        });

        waitforgetArray.then(() => {
            try {
                var waitForGetUsersByIdArray = new Promise((resolve, reject) => {
                    const users = db.collection('users').find({ "_id": { "$in": ids } });
                    users.toArray(function (err, doc) {
                        resolve(doc)
                    })
                });

                waitForGetUsersByIdArray.then((User) => {
                    res.json(User);
                })
            } catch (e) {
                res.json({ message: e });
            }
        })
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:user/getusernotadministratedsubjects', async (req, res) => {
    try {
        const post = await Post.find({ user: req.params.user, state: 1, tstatus: "Accepted" })
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }

});


router.get('/:user/:postId', async (req, res) => {
    try {
        const post = await Post.find({ user: req.params.user, _id: req.params.postId })
        res.json(post);
    } catch (err) {
        //res.json({message:err});
        res.json("error");
    }

});

router.get('/:user/history/h', async (req, res) => {
    const sem = await semester.findOne();
    var semesterStartDate = new Date(sem.startDate);
    try {
        const post = await Post.find({ user: req.params.user, date: { $lte: semesterStartDate } });
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete a specific post
router.delete('/:user/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update a post
router.patch('/:user/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { status: req.body.status } }
        );

        res.json(updatedPost);

    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;

