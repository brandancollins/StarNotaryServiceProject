/* jshint esversion: 8 */
const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "My StarToken", "STN");
};
