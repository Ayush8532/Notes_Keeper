<<<<<<< HEAD
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel")
const generateToken=require("../utils/generateToken")


//For register an account----
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exits");
    }
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
            pic:user.pic
        });
    }
    else {
        res.status(400)
        throw new Error('Error Occured!')
    }
});

//FOR LOGIN____

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
            pic: user.pic
        });
    }
    else {
            res.status(400)
        throw new Error('Invalid Email or Password')
    }
        
});

const updateUserProfile = asyncHandler(async (req, res) => {
      if (!req.user) {
        res.status(401);
        throw new Error("User not authorized");
      }
    const user = await User.findById(req.user._id);
    
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.pic = req.body.pic || user.pic;

        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            pic: updatedUser.pic,
            token:generateToken(updatedUser._id)
        });
    }
    else {
            res.status(400)
        throw new Error("User not found!");
    }
   
});
=======
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel")
const generateToken=require("../utils/generateToken")


//For register an account----
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exits");
    }
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
            pic:user.pic
        });
    }
    else {
        res.status(400)
        throw new Error('Error Occured!')
    }
});

//FOR LOGIN____

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
            pic: user.pic
        });
    }
    else {
            res.status(400)
        throw new Error('Invalid Email or Password')
    }
        
});

const updateUserProfile = asyncHandler(async (req, res) => {
      if (!req.user) {
        res.status(401);
        throw new Error("User not authorized");
      }
    const user = await User.findById(req.user._id);
    
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.pic = req.body.pic || user.pic;

        if (req.body.password) {
            user.password = req.body.password;
        }
        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            pic: updatedUser.pic,
            token:generateToken(updatedUser._id)
        });
    }
    else {
            res.status(400)
        throw new Error("User not found!");
    }
   
});
>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
module.exports = { registerUser,authUser,updateUserProfile };