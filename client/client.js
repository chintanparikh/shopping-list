Template.items.items = function()
{
  return Items.find({});
};

Template.new.events = {
  'keyup #new-item': function (e) {
    if (e.keyCode === 13)
    {
      var new_item = $("#new-item").val();
      if (new_item != '')
        Items.insert({name: new_item});
        $("#new-item").val("");
    }
  }
}

Template.item.events({
  'click .close': function()
  {
    Items.remove(this);
  }
})