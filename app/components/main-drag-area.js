import Ember from 'ember';

export default Ember.Component.extend({
  foursquareApi: Ember.inject.service(),
  googleMaps: Ember.inject.service(),
  selectedItems: Ember.inject.service(),

  actions: {
    droppedDinner(businessId) {
      var business = this.get('foursquareApi.foursquareDrinks')
      var selectedItems = this.get('selectedItems.businesss');
      var business = this.get('model').findBy('id', parseInt(businessId));

      if(!selectedItems.contains(business)){
        return selectedItems.pushObject(business);
      }
    },

    droppedDrinks(businessId) {
      var business = this.get('foursquareApi.foursquareDrinks')
      var selectedItems = this.get('selectedItems.businesss');
      var business = this.get('model').findBy('id', parseInt(businessId));

      if(!selectedItems.contains(business)){
        return selectedItems.pushObject(business);
      }
    },

    droppedActivity(businessId) {
      var business = this.get('foursquareApi.foursquareDrinks')
      var selectedItems = this.get('selectedItems.businesss');
      var business = this.get('business').findBy('id', parseInt(businessId));

      if(!selectedItems.contains(business)){
        return selectedItems.pushObject(business);
      }
    },

    remove(business) {
      return this.get('selectedItems.businesses').removeObject(business);
    }
  },

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      $('#spin').click(function() {
      for (var i = 1; i < 4; i ++) {
        var current = '#' + i;
        $(current).slick('slickGoTo', Math.random() * 10);
      }
    });
    $('.venue__img').click(function(){
      var current = $(this).parents('.venue').get(0);
    $(current).find('.card').addClass('flipped')
    .mouseleave(function(){
        $(current).find('.card').removeClass('flipped');
    });
    return false;
});
  $('.map__footer').slick({
  centerMode: true,
  infinite: true,
  speed: 500,
  prevArrow : '<button type="button" class="slick-prev"> <</button>',
  nextArrow : '<button type="button" class="slick-next"> ></button>',
  swipeToSlide: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});
    });
  }
});
