const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Learnify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // img: {
  //   data: { type: Buffer, required: true }, // Binary image data
  //   contentType: { type: String, required: true }, // MIME type of the image
  // },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
