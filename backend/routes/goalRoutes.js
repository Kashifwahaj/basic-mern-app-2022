const express = require('express');
const { getGoals,setGoals ,updateGoal,deleteGoal} = require('../controllers/goalController');
const router = express.Router();

router.route('/').get(getGoals).post(setGoals)

router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router;