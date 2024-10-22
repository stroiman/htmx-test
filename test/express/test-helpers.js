const expressApp = require("../../src/express");
const supertest = require("supertest");

const app = () => expressApp;
const request = () => supertest(app());
const createAgent = () => supertest.agent(app());

module.exports = {
  app,
  request,
  createAgent,
};
