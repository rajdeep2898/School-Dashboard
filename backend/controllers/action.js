// const User = require("../models/user");
// const Order = require("../models/order");
const Action = require("../models/action");

exports.getActionById = (req, res, next, id) => {
  //   Category.findById(id).exec((err, cate) => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: "Category not found in DB",
  //       });
  //     }
  //     // console.log("cate", cate);

  //   });
  req.id = id;
  next();
};

exports.findActionById = (req, res, next, id) => {
  Action.findById(id).exec((err, action) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB",
      });
    }
    // console.log("cate", cate);
    req.action = action;
    next();
  });
};

exports.createAction = (req, res) => {
  var data = req.body;
  console.log(data);

  data.role = req.id;
  const action = new Action(data);
  action.save((err, action) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save action in DB",
      });
    }
    res.json({ action });
  });
};
exports.getaAction = (req, res) => {
  console.log(req.action);
  return res.json(req.action);
};
exports.getAction = (req, res) => {
  Action.find({ role: { $lte: req.id } }).exec((err, action) => {
    if (err) {
      return res.status(400).json({
        error: "NO Category found",
      });
    }
    res.json(action);
  });
};
// exports.updateProduct = (req, res) => {
//   let form = new formidable.IncomingForm();
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, file) => {
//     if (err) {
//       return res.status(400).json({
//         error: "problem with image",
//       });
//     }

//     let product = req.product;
//     product = _.extend(product, fields);

//     if (file.photo) {
//       if (file.photo.size > 3000000) {
//         return res.status(400).json({
//           error: "File size too big!",
//         });
//       }
//       product.photo.data = fs.readFileSync(file.photo.path);
//       product.photo.contentType = file.photo.type;
//     }
//     product.save((err, product) => {
//       if (err) {
//         res.status(400).json({
//           error: "Updation of product failed",
//         });
//       }
//       res.json(product);
//     });
//   });
// };
exports.updateAction = (req, res) => {
  const action = req.action;
  action.id = req.body.id ? req.body.id : action.id;
  action.name = req.body.name ? req.body.name : action.name;
  action.email = req.body.email ? req.body.email : action.email;
  action.task = req.body.task ? req.body.task : action.task;

  //   const cname = category.name;
  //   console.log("new Category", req.body.name);
  //   console.log("Category object", category);
  //   console.log("Category object1", cname);

  action.save((err, updateAction) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to Update catagory",
      });
    }
    res.json(updateAction);
  });
};
exports.removeAction = (req, res) => {
  const action = req.action;
  action.remove((err, action) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to Delete this catagory",
      });
    }
    res.json({
      message: "Successfully Deleted",
    });
  });
};
