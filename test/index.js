var should = require('chai').should(),
    semAcento = require('../index');

describe('#normalize', function() {
  it('converts á ã â à ä into a a a a a;', function() {
    semAcento.normalize('á ã â à ä').should.equal('a a a a a');
  });

});