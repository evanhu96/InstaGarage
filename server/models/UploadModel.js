const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  
  filename: String,
  encoding: String,
});

const UploadModel = mongoose.model("Upload", UploadSchema);

module.exports = UploadModel;
