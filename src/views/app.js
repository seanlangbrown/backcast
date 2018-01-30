var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(window.exampleVideoData);
    this.videoListView = new VideoListView({collection: this.videos});
    //console.log(this.videos);
    this.videoPlayer = new VideoPlayerView({model: this.videos.models[0]});
    this.render(); 
    
  },


  render: function() {
    var totalView = {
      videoList: this.videoListView.render(),
      searchBar: '',
      videoPlayer: this.videoPlayer.render()
    };
    console.log(this.videoListView.$el);
    this.$el.html(this.template(totalView));
    console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
