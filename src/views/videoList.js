var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    var listOfMovies = this.collection.map(function(video) {
      var entry = new VideoListEntryView({model: video});
      var renderReturnValue = entry.render();
      return entry.$el.html();
    });
    console.log(listOfMovies);
    this.$el.html(this.template({listOfMovies: listOfMovies}));
    // console.log(this.el);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});