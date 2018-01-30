var VideoListEntryView = Backbone.View.extend({
  
  events: {
    "click .video-list-entry-title": 'select'
  },
  
  render: function() {
    console.log('VideoListEntryView ');
    this.$el.html(this.template(this.model.attributes));
    console.log(this.el);
    return this;
  },

  select: function () {
    this.model.select();
    console.log('selected');
  },

  template: templateURL('src/templates/videoListEntry.html')

});
