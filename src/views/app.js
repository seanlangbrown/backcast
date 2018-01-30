var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.add(window.exampleVideoData);
    this.videoListView = new VideoListView({collection: this.videos});
    this.render();
    this.videoListView.render();
    //access list (array of models)
      //create new collection from list
        //pass in collection to new view constructor function     
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
