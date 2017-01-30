var test = require('tape');
var summer = require('../');

test('summer', function (t) {
  var winter = summer(-40);
  console.log('ha ha ha ha');
  t.equal(winter(40), 0, 'should be equal');
  t.end();
})
