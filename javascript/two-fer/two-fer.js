var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  return `One for ${who || "you"}, one for me.`;
};

module.exports = TwoFer;
