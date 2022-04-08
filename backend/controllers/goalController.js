const asyncHandler = require('express-async-handler') 

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({ message: "Get Goals"});
})

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add Text Field Data')
    }

    res.status(200).json({ message: "Set Goal"});
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` });
})

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` });
})

module.exports = {getGoals,setGoals,updateGoal,deleteGoal}