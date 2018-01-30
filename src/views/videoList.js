var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.el);
    this.$el.find('.list').append(this.collection.map(function(video){
      var entry = new VideoListEntryView({model: video});
      return entry.render();
    }))
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});