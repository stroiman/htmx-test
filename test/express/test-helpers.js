const expressApp = require("../../src/express");
const supertest = require("supertest");

const app = () => expressApp;
const request = () => supertest(app());
const agent = () => supertest.agent(app());

module.exports = {
  app,
  request,
  agent,
};
