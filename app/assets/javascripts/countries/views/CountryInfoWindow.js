/**
 * The Header view.
 */
define([
  'jquery',
  'backbone',
  'underscore',
  'mps'
], function($,Backbone, _,mps) {

  'use strict';

  var SourceWindowModel = Backbone.Model.extend({
    defaults: {
      hidden: true
    }
  });

  var SourceWindowView = Backbone.View.extend({
    id: 'window',
    className: 'source_window',
    events: {
      'click .close': 'hide'
    },

    initialize: function() {
      var that = this;

      // this.options = _.extend(this.options, this.defaults);
      this.model = new SourceWindowModel();

      this.model.bind("change:hidden", this._toggle, this);

      this.$htmlbody = $('html,body');
      this.$backdrop = $('.backdrop');


      var template = $('#window-template').html();

      this.template = new cdb.core.Template({
        template: template
      });
    },

    _initBindings: function() {
      var that = this;

      $(document).on('keyup', function(e) {
        if (e.keyCode === 27) {
          that.hide();
        } // esc
      });

      this.$backdrop.on('click', function() {
        that.hide();
      });
    },

    _stopBindings: function() {
      $(document).off('keyup');

      this.$backdrop.off('click');
    },

    addScroll: function() {
      // this.$content.jScrollPane({
      //   autoReinitialise: true
      // });

      // this.api = this.$content.data('jsp');
    },

    _toggle: function() {
      if (this.model.get('hidden') === true) {
        this.$el.fadeOut(250);
        this.$backdrop.fadeOut(250);
        if ($(window).width() < 850) {
          this.$htmlbody.removeClass('active');
          $(document).scrollTop(this.positionDoc);
        }
        this._stopBindings();
      } else if (this.model.get('hidden') === false) {
        this._initBindings();
        this.positionDoc = $(document).scrollTop();

        this.$backdrop.fadeIn();
        this.$el.fadeIn(250, _.bind(function(){
          if ($(window).width() < 850) {
            this.$htmlbody.addClass('active');
          }
        },  this ));
      }
    },

    hide: function(e) {
      e && e.preventDefault();

      this.model.set('hidden', true);

      return this;
    },

    show: function(data_slug, data_coverage) {
      var that = this;

      this.$backdrop.show();
      this.model.set('hidden', false);

      if (!this.model.get('addContent')) {
        this.$content.html($('#sources').html());

        this.model.set('addContent', true);
      }

      var $data_slug = this.$content.find('#' + data_slug);

      this.$content.find("article, ul, ul li").hide();

      $data_slug.show();

      if (data_coverage) {
        this.$content.find(".source_header, .source_body").hide();
        this.$content.find(".source_coverage_header, .source_coverage").show();
      } else {
        this.$content.find(".source_header, .source_body").show();
        this.$content.find(".source_coverage_header, .source_coverage").hide();
      }

      $data_slug.find(".bullets, .bullets li").show();

      $data_slug.closest("ul").show();
      $data_slug.closest("article").show();

      return this;
    },

    render: function() {
      var that = this;

      this.$el.html(this.template.render( this.model.toJSON() ));

      this.$content = this.$el.find('.content');
      this.$close = this.$el.find('.close');

      return this.$el;
    }

  });
  return SourceWindowView;
});
