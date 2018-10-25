var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var Studentschema = new mongoose.Schema({
    name: String,
    class: String,
    section: String,
    dob: Date,
    address: String
})
Studentschema.plugin(mongoosePaginate);

const Student = mongoose.model('Studnet', Studentschema); // Model.paginate()

module.exports = Student;