var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    'click button': 'submit'
  },

  submit: function(event) {
    var query = null;
    this.collection.search(query);
  },
  
  render: function() {
    this.$el.html(this.template());
    //this.trigger('render', this);
    return this;
  },

  template: templateURL('src/templates/search.html')

});
