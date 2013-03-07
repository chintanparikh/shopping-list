Items = new Meteor.Collection("items");

Meteor.methods({
	removeItem: function(item)
	{
		var id = "#" + item['name'];
		$(id).fadeOut(400);
		Items.remove(item);
	}
});