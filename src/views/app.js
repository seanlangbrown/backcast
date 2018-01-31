var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(window.exampleVideoData);
    this.videoListView = new VideoListView({collection: this.videos});
    //console.log(this.videos);
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    this.render(); 
     
    this.videoPlayer.on('render', this.render, this);
  },
  

  render: function() {
    var playerView = this.videoPlayer.$el.html();
    var videoListView = this.videoListView.render();
    //console.log(playerView);
    var totalView = {
      videoList: videoListView,
      searchBar: '',
      videoPlayer: playerView
    };
    //console.log(this.videoListView.$el);
    this.$el.html(this.template(totalView));
    //console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
