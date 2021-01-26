process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
const app = require("../app");

let Action = require("../models/action.modal.js");

//Our parent block

describe("Action Test", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Action.deleteMany({}, (err) => {
      done();
    });
  });

  /*
   * Test the GET /todos/ route
   */
  describe("GET : /action/all/:actionId Action", () => {
    it("It should GET all action by category given flag=0", (done) => {
      chai
        .request(app)
        .get("/api/action/all/0")
        .end((err, res) => {
          //Testing all the parameters for GET- Route
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("GET : /action/all/:actionId Action", () => {
    it("It should GET all action by category given flag=1", (done) => {
      chai
        .request(app)
        .get("/api/action/all/1")
        .end((err, res) => {
          //Testing all the parameters for GET- Route
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("GET : /action/all/:actionId Action", () => {
    it("It should GET all action by category given flag=2", (done) => {
      chai
        .request(app)
        .get("/api/action/all/2")
        .end((err, res) => {
          //Testing all the parameters for GET- Route
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the GET /todos/:id route
   */
  describe("GET : /action/:findactionId Action", () => {
    it("It should GET a action by given id", (done) => {
      let action = new Action({
        id_number: "1",
        name: "Task 1",
        email: "abx@gmail.com",
        task: "tesk 1",
        role: 0,
      });
      action.save((err, action) => {
        chai
          .request(app)
          .get("/api/action/" + action.id) // Provide the ID of the Entry
          .send(action)
          .end((err, res) => {
            //Testing all the parameters for GET/:id - Route
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("name");
            res.body.should.have.property("email");
            res.body.should.have.property("task");
            res.body.should.have.property("role");
            res.body.should.have.property("_id").eql(action.id);
            done();
          });
      });
    });
  });

  /*
   * Test the /POST todos/add route
   */
  describe("POST: /api/action/:actionId Action", () => {
    // Check for Errors while adding Todos

    it("It should not POST a Action without id_number field", (done) => {
      let action = new Action({
        name: "Task 1",
        email: "abx@gmail.com",
        task: "tesk 1",
        role: 0,
      });

      chai
        .request(app)
        .post("/api/action/0")
        .send(action)
        .end((err, res) => {
          //Testing all the parameters for POST /todos/add - Route
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have.property("errors");
          res.body.errors.should.have.property("id_number");
          res.body.errors.id_number.should.have
            .property("kind")
            .eql("required");
          done();
        });
    });
    //Testing for  Posting of Todos
    it("It should POST a Todo ", (done) => {
      let action = new Action({
        id_number: "1",
        name: "Task 1",
        email: "abx@gmail.com",
        task: "tesk 1",
        role: 0,
      });
      chai
        .request(app)
        .post("/api/action/0")
        .send(action)
        .end((err, res) => {
          //Testing all the parameters for POST /todos/add - Route
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  /* Test the /PUT/:id route
   */
  describe("PUT : /api/action/:findactionId Action", () => {
    it("it should UPDATE a Action given the id", (done) => {
      let action = new Action({
        id_number: "1",
        name: "Task 1",
        email: "abx@gmail.com",
        task: "tesk 1",
        role: 0,
      });
      let action_2 = new Action({
        id_number: "2",
        name: "Task 1",
        email: "abx@gmail.com",
        task: "tesk 1",
        role: 0,
      });
      action.save((err, action) => {
        chai
          .request(app)
          .put("/api/action/" + action.id)
          .send(action_2)
          .end((err, res) => {
            //Testing all the parameters for PUT /todos/:id - Route
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("id_number");
            done();
          });
      });
    });
  });
  /*
   * Test the /DELETE/:id route
   */
  describe("DELETE: /api/action/:findactionId Action", () => {
    it("it should DELETE a Action given the id", (done) => {
      let action = new Action({
        id_number: 1,
        name: "Task 1",
        email: "abx@gmail.com",
        task: "tesk 1",
        role: 0,
      });

      action.save((err, action) => {
        chai
          .request(app)
          .delete("/api/action/" + action.id)
          .end((err, res) => {
            //Testing all the parameters for DELETE /todos/:id - Route
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("_id").eql(action.id);
            done();
          });
      });
    });
  });
});
