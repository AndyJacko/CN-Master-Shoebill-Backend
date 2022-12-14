const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  postcomment: { type: String, required: true },
  postpic: { type: String },
  posteddate: { type: Date, default: Date.now },
  likeCount: 0,
  likes: { type: Number, default: Math.ceil(Math.random() * 1000) },
  rebarks: { type: Number, default: Math.ceil(Math.random() * 1000) },
  numcomments: { type: Number, default: Math.ceil(Math.random() * 1000) },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

