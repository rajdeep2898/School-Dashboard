const express = require("express");
const router = express.Router();

// const {
//   getCategoryById,
//   createCategory,
//   getCategory,
//   getAllCategory,
//   updateCategory,
//   removeCategory,
// } = require("../controllers/category");
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const {
  getActionById,
  findActionById,
  createAction,
  getAction,
  updateAction,
  removeAction,
  getaAction,
} = require("../controllers/action");

//Params
router.param("actionId", getActionById);
router.param("findactionId", findActionById);

//Routs
//Create
router.post("/action/:actionId", createAction);
//Read
router.get("/action/all/:actionId", getAction);
router.get("/action/:findactionId", getaAction);

//Update
router.put("/action/:findactionId", updateAction);
//Delete
router.delete("/action/:findactionId", removeAction);

module.exports = router;
