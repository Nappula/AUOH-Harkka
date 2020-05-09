const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    "ToolName": { type: String, required: true, index: { unique: true } },
    Material: { type: String, required: true },
    CuttingSpeed: { type: Number, required: true },
    FeedRate: { type: Number, required: true }

});

module.exports = mongoose.model("MachiningParameterSet", schema);