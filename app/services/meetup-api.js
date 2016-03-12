import Ember from 'ember';

export default Ember.Service.extend({
  map: Ember.inject.service('google-map'),
  // lat: this.map.lat,
  // lng: this.map.lng,
  meetups: '',

  findMeetups(lat, lng) {

    var url = 'https://api.meetup.com/2/open_events';
    var parameters = {
      sign: true,
      key: '1f145f34422512e61271b667b7d2733',
      text: 'tech',
      lat: this.lat,
      lng: this.lng,
      order: 'trending',
      desc: true,
    }
    // console.log(this.lat);
    // console.log(this.lng);
    return Ember.$.ajax({
      url: url,
      data: parameters,
      dataType: 'jsonp',
      jsonpCallback: 'mycallback',
      cache: true
    }).then(function(responseJSON) {
      // console.log(responseJSON);
        var events = [];
        responseJSON.results.forEach(function(event) {
          events.push(event);
        });
        return events;
      });
    }


});
