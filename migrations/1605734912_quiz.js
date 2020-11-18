const Quiz = artifacts.require('Quiz');
module.exports = function(_deployer) {
  _deployer.deploy(Quiz);
};
