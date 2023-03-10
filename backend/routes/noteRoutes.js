<<<<<<< HEAD
const express = require("express");
const { getNotes, createNote,getNoteById,UpdateNote,DeleteNote} = require("../controllers/notesControllers");
const { protect } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.route('/').get(protect,getNotes);
router.route('/create').post(protect,createNote);
router.route('/:id').get(getNoteById).put(protect,UpdateNote).delete(protect,DeleteNote);

=======
const express = require("express");
const { getNotes, createNote,getNoteById,UpdateNote,DeleteNote} = require("../controllers/notesControllers");
const { protect } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.route('/').get(protect,getNotes);
router.route('/create').post(protect,createNote);
router.route('/:id').get(getNoteById).put(protect,UpdateNote).delete(protect,DeleteNote);

>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
module.exports = router;