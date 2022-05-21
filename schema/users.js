
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const reqString = {
  type: String,
  required: true
};

const reqNum = {
  type: Number,
  required: true
};

const schema = new Schema({
  id: reqString,
  level: reqNum,
  xp: reqNum,
  //money: reqNum,
});

mongoose.model('users', schema);
exports.schema = mongoose.model('users');

exports.add = async (data, success, error) => {
  let newData = new exports.schema(data);

  return newData.save()
    .then(data_ => {
      return success(data_);
    })
    .catch(e => {
      return error(e);
    });
}

exports.find = async (query, result, success, error) => {
  return exports.schema.find(query, result)
    .then(data_ => {
      return success(data_);
    })
    .catch(e => {
      return error(e);
    });
}

exports.delete = async (data, success, error) => {
  return exports.schema.deleteMany(data)
    .then(data_ => {
      return success(data_);
    })
    .catch(e => {
      return error(e);
    });
}

exports.update = async (query, result, success, error) => {
  return exports.schema.updateMany(query, result)
    .then(data_ => {
      return success(data_);
    })
    .catch(e => {
      return error(e);
    });
}