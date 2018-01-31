var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    //console.log(video);
    this.set('id', video.id.videoId || video.id);
  },

  select: function() {
    //console.log("video was selected");
    this.trigger('select', this);
  }

});
