var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click .video-list-entry-title': 'select'
   },
  
  render: function() {
    console.log('VideoListEntryView ');
    console.log(this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
