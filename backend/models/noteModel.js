<<<<<<< HEAD
const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref:"User",
  },
},
    {
        timestamps:true,
    }
);

const Note = mongoose.model("Note", noteSchema);

=======
const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref:"User",
  },
},
    {
        timestamps:true,
    }
);

const Note = mongoose.model("Note", noteSchema);

>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
module.exports = Note;