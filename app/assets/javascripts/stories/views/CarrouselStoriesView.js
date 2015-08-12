/**
 * The StoriesEdit view.
 */
define([
  'jquery',
  'backbone',
  'mps',
  'handlebars',
  'text!landing/templates/paginationSlider.handlebars',
], function($, Backbone, mps, Handlebars, tpl) {

  'use strict';
  //HELPER for handlebars
  Handlebars.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i < to; i += incr)
      accum += block.fn(i);
    return accum;
  });

  // PAGINATION
  var PaginationView = Backbone.View.extend({

    el: '#paginationView',

    template: Handlebars.compile(tpl),

    events: {
      'click li' : '_navigateTo'
    },

    initialize: function(model){
      this.len = model.len;
      this.render();
      this._setListeners()
    },

    _setListeners: function(){
      mps.subscribe('slider:index', _.bind(function(index){
        this._changeCurrent(index);
      },this));
    },

    render: function(){
      this.$el.html(this.template({len: this.len}));
      this.$pages = this.$el.find('li');
      this._changeCurrent(0);
    },

    _changeCurrent: function(index){
      this.$pages.eq(index).addClass('current').siblings().removeClass('current');
    },

    _navigateTo: function(e){
      e && e.preventDefault();
      var index = $(e.currentTarget).index();
      mps.publish('slider:change',[index]);
    }
  });



  var CarrouselStoriesView = Backbone.View.extend({
    el: $('#carrousel-stories'),

    defaults: {
      speed: 300
    },

    events: {
      'click .btn-nav' : 'onChange',
    },

    initialize: function() {
      if (!this.$el.length) {
        return
      }
      mps.publish('Interesting/update',['discussion_forum, how_to, submit_a_story']);

      this.current = 0;
      this.$btnNav = this.$el.find('.btn-nav');
      this.$slide = this.$el.find('.slide');
      this.len = this.$slide.length;

      //Init Pagination
      this.pagination = new PaginationView({ len: this.len });


      // inits
      this.setCurrent();
      this.setListeners();
    },

    setListeners: function(){
      mps.subscribe('slider:change', _.bind(function(index){
        this.current = index;
        this.setCurrent();
      },this));
    },

    setCurrent: function(){
      this.$slide.removeClass('current');
      this.$slide.eq(this.current).addClass('current');
      mps.publish('slider:index',[this.current]);
    },

    onChange: function(e) {
      e && e.preventDefault();
      var dir = $(e.currentTarget).data('direction')
      switch(dir){
        case 'prev':
          (this.current === 0) ? this.current = this.len - 1 : this.current--;
        break;
        case 'next':
          (this.current === this.len - 1) ? this.current = 0 : this.current++;
        break;
        default:
          this.current = dir
        break;
      }
      this.setCurrent();
    }

  });


  return CarrouselStoriesView;

});





