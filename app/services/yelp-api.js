import Ember from 'ember';
// var Yelp = require('yelp');
// import Yelp from 'npm:yelp';
import oauthSignature from 'npm:oauth-signature'

export default Ember.Service.extend({
  yelpResult: [],


  getSignature(url, parameters) {
    var httpMethod = 'Get';
    var consumerSecret = 'BLtzvHCPEIe9pHqIh9OPId8jqf4';
	  var tokenSecret = 'M9P4ZXaLGLPAC8sekCYIetzQdaQ';
    return oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
  },

  yelpRequest(params) {
    var urlYelp = 'https://api.yelp.com/v2/search';
    var parameters = {
      oauth_consumer_key : 's5HPEtEzcXAopt3qEA8uyg',
      oauth_token : 'kVXVaCW2aHjC_nb4LHs1xdBfrJd7fzKH',
      oauth_nonce : (Math.floor(Math.random() * 1e12).toString()),
      oauth_timestamp : Math.floor(Date.now()/1000),
      oauth_signature_method : 'HMAC-SHA1',
      callback: 'mycallback',
    };
    for (var attributeName in params) { parameters[attributeName] = params[attributeName]};
    var signature = this.getSignature(urlYelp, parameters);
    parameters.oauth_signature = signature;
    var result;
    var self = this;
    result = Ember.$.ajax({
      url: urlYelp,
      data: parameters,
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(response) {
      self.set('yelpResult', response.businesses);
      // console.log(JSON.stringify(self.get('yelpResult')));
      console.log(self.get('yelpResult'));
      return response.businesses;
    });
  }

});
