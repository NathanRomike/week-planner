import Ember from 'ember';

export function neighborhoodAssembler(params/*, hash*/) {
  var neighborhoods = params[0];
  var result = [];
  var i;
  for (i = 0; i < neighborhoods.length; i++) {
    if (i === 2) {
      break;
    }
    result.push(neighborhoods[i]);
  }
  return result;
}

export default Ember.Helper.helper(neighborhoodAssembler);
