Meteor.startup(function () {
if(Items.find({}).count() == 0)
{
  var items = ["Apples", "Oranges", "Peanut Butter"];

  for (var i = 0; i < items.length; i++)
  {
    Items.insert({name: items[i]});
  }
}
});
