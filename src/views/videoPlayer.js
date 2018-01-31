var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
    this.render();
  }, 

  render: function(video) {
    console.log('rerendering: ');
    //console.log(video);
    video = video || this.collection.models[0];
    //this.$el.html('<div class="loading">Please wait...</div>');
    console.log(video.attributes.snippet.title);
    console.log(video.attributes.snippet.description);
    this.$el.html(this.template(video.attributes));
    this.trigger('render', this);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
