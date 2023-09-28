const mongoose = require("mongoose");
// const taskSchema = new mongoose.schema()

const schema = mongoose.Schema;

const taskSchema = new schema({
  title: String,
  description: String,
  tag: String,
});


module.exports = mongoose.model('task', taskSchema)