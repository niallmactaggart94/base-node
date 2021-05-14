
const helloWorld = function (req, res) {

  res.json({
    hello: 'world',
  });
};


module.exports = {
  helloWorld,
};
