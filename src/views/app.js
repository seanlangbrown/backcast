var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(window.exampleVideoData);
    this.videoListView = new VideoListView({collection: this.videos});
    this.render(); 
  },


  render: function() {
    var totalView = {
      videoList: this.videoListView.render(),
      searchBar: '',
      videoPlayer: ''
    };
    console.log(this.videoListView.$el);
    this.$el.html(this.template(totalView));
    console.log(this.$el.html());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
