var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
  },
  
  events: {
    'click .video-list-entry-title': 'select'
  },
  
  render: function() {
    console.log('VideoListEntryView ');
    this.$el.html(this.template(this.model.attributes));
    console.log(this.el);
    return this;
  },

  select: function () {
    console.log('selected by click');
    this.model.select();
  },
  
  alert: function () {
    alert('alerted' + this);
  },

  template: templateURL('src/templates/videoListEntry.html')

});
