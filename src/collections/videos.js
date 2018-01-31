var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search/?q=surfing&maxResults=5&type=video&part=snippet&key=' + window.APIKey + '&videoEmbeddable=true',

  search: function(query) {
    //console.log(window.APIKey);
    this.fetch({
      type: 'GET',
      data: {
        part: 'snippet',
        key: window.APIKey,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function(data) {
        console.log(data);
      },
    });
  },

  parse: function(response) {
    console.log('parsing');
    return response.items;
  }

});
