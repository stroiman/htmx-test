const { initializeApp } = require("../../src/express");
const express = require("express");
const supertest = require("supertest");

const expressApp = express();
initializeApp(expressApp);

const app = () => expressApp;
const request = () => supertest(app());
const createAgent = () => supertest.agent(app());

module.exports = {
  app,
  request,
  createAgent,
};
