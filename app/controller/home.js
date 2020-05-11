'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg1231123' + ctx.app.config.keys;
  }
}

module.exports = HomeController;
