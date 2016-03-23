var GarageView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'change', this.render);
    this.render();
  },

  events: {},

  render: function(){
    var that = this
    var domElement = this.$el.html('');
    this.collection.forEach(function(model){
      console.log(this.model)
      domElement.append(that.template(model.attributes));
    });
    $('body').append(this.$el);
  },

  tagName: 'table',

  template: _.template('<tr><td>Make: <%= make %></tr></td>')
});
