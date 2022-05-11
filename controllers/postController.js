const Post = require('../models/post');
const appErrorHandle = require('../service/appErrorHandle');
const modelHelper = require('../helpers/modelHelper');

//controller setting
const requiredFields = ['user'];

//index
exports.index = async function (req, res, next) {
  const datas = await User.find();
  res.status(200).json({
    data: datas,
  });
};

//store
exports.store = async function (req, res, next) {
  let data = req.body;
  //check required field
  modelHelper.checkRequiredField(data, requiredFields, next);
  //other check
  if (!data.content && !data.image) {
    next(appErrorHandle(400, 'data or image is required'), next);
  }
  const post = await User.create(data);
  res.status(201).json({
    data: post,
  });
};

exports.show = async function (req, res, next) {
  const _id = req.params.id;
  if (!_id) {
    next(appErrorHandle(400, 'id is required'), next);
  }
  const post = await Post.findById(_id);
  if (!post) {
    next(appErrorHandle(400, 'data is not exist'), next);
  }
  res.status(200).json({
    data: post,
  });
};
