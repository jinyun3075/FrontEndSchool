const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogs = schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    section: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    pubDate: {type: Date, default: Date.now},
    modDate: { type: Date, default: Date.now },
})
module.exports = mongoose.model("blogs",blogs);