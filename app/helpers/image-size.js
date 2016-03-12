import Ember from 'ember';

export function imageSize(params/*, hash*/) {
  var stringToReplace = params[0];
  return stringToReplace.replace('ms.jpg', 'o.jpg');
}

export default Ember.Helper.helper(imageSize);
