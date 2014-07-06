Items = new Meteor.Collection("items");

if (Meteor.isClient){
  Template.todolist.item = function(){
    return Items.find();
  }
  Template.todolist.isCompleted = function(){
    if (this.completed){
      return "checked";
    }
    else{
      return "";
    }
  }
  Template.todolist.events({
    "change input[type='checkbox']": function(evt){
      var checked = $(evt.target).is(":checked");
      Items.update(this._id, {"$set":{"completed": checked}})
    }
  })
}

if (Meteor.isServer){
  Meteor.startup(function(){
    if (Items.find().count() == 0){
      Items.insert({
        "name": "clean toilet",
        "completed": true,
        "deleted": false,
        "order": 0
      });
      Items.insert({
        "name": "water plants",
        "completed": false,
        "deleted": false,
        "order": 0
      });
      Items.insert({
        "name": "put on clean underwear",
        "completed": false,
        "deleted": false,
        "order": 0
      });
      Items.insert({
        "name": "wash the royal penis",
        "completed": true,
        "deleted": false,
        "order": 0
      });
      Items.insert({
        "name": "eat lunch",
        "completed": false,
        "deleted": false,
        "order": 0
      });
    }
  })
}