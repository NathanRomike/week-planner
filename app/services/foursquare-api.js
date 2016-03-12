import Ember from 'ember';

export default Ember.Service.extend({
  // foursquareResult: [],
  
  foursquareDrinks: [],
  foursquareDinners: [],
  foursquareArts: [],

  fakeFunction(params) {
    if (params) {
      return true;
    } else {
      return false;
    }
  },

  foursquareRequest(queryType, params) {
    var url = 'https://api.foursquare.com/v2/venues/' + queryType;
    params.client_id = '5DRXWAUORRCB1B1PRICKG3B1ZYXRXGNWA3RKKTRGIARXJVZK';
    params.client_secret = 'RI2F4FEPY1XTAW1ABTLEDA44SW5BCH5SN5FDOS45I5CY0G4W';
    params.venuePhotos = 1;
    params.v = 20160309;
    var self = this;
    // debugger;
    return Ember.$.ajax({
      url: url,
      data: params,
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(response) {
      // console.log(response);
      if ('groups' in response.response) {
        if ('items' in response.response.groups[0]) {
          for (var item of response.response.groups[0].items){
            var venue = {};
            if ('venue' in item) {
              venue.id = item.venue.id;
              venue.name = item.venue.name;
              venue.category = item.venue.categories[0].name;
              if ('featuredPhotos' in item.venue) {
                venue.photo = item.venue.featuredPhotos.items[0].prefix + 'original' + item.venue.featuredPhotos.items[0].suffix || '';
              }
              venue.contact = item.venue.contact.formatedPhone;
              venue.location = item.venue.location;
              venue.rating = item.venue.rating;
              if ('tips' in item) {
                venue.shortDescription = item.tips[0].text;
              }
              if ("hours" in item.venue) {
                venue.isOpen = item.venue.hours.isOpen;
                venue.hoursStatus = item.venue.hours.status;
              };
              if ("url" in item.venue) {
                venue.url = item.venue.url;
              };
              if ('price' in item.venue) {
                venue.price = item.venue.price.currency;
                for (var i = 0; i<item.venue.price.tier-1; i++) {
                  venue.price += item.venue.price.currency;
                }
              } else {
                venue.price = 'not available';
              }

            }
            if (params.section === 'drinks') {
              venue.type = 'drink';
              self.get('foursquareDrinks').pushObject(venue);
            } else if (params.section === 'food'){
              venue.type = 'dinner';
              self.get('foursquareDinners').pushObject(venue);
            } else {
              venue.type = 'art';
              self.get('foursquareArts').pushObject(venue);
            }
          }
        }
      }
      // self.set('foursquareResult', response.response.groups[0]);
      // console.log(JSON.stringify(self.get('yelpResult')));
      // console.log(self.get('foursquareResult'));
      // console.log(JSON.stringify(response.response.groups[0]));
      return response;
    });
  }
});
