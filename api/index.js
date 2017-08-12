import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});

router.get('/contests', (req,res) => {
    res.send({ contests:  contests });
});

router.get('/contests/:contestId', (req,res) => {
    let contest = data.contests[req.params.contestId - 1];
    contest.description = 'Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.Lorm skd  ldld dsd kasdkf. Kaep kxoe ope. Pkd eopolcm qpdk kxnd. Pkdk enady iwndn.';
    res.send(contest);
});


export default router;