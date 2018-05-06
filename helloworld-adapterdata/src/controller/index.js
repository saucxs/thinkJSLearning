const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
      let model = this.model("user");
      let data =  await model.where({username: "张三"}).find();
      this.assign('password',data.password);
      return  this.display();
  }
};
