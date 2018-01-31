var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.videoViews = this.collection.map(function(video) {
      var view = new VideoListEntryView({model: video});
      var renderReturnValue = view.render();
      return view;
    });
    console.log(this.videoViews);
    this.$el.html(this.template({listOfMovies: this.videoViews}));
    console.log(this.el);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});