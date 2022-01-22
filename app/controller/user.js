const { reset } = require("nodemon");
const model = require("../models/user");

exports.getData = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      docs,
    });
  });
};

exports.postData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if(err){
        res.send({err:'Error:' + err},422)
    } else {
        res.send({ docs });
    }
    
  });
};
