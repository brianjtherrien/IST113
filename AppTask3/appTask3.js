var myKey = "listValues"
var myItems = [];

function setupLocal() {

  if(localStorage.getItem(myKey) != null) {
    let myItemsString = localStorage.getItem(myKey);
    myItems = JSON.parse(myItemsString);
    $(myItems).each(function() {
      createItem(this);
    });
  }
  else {
    createItem("Pick up dry cleaning");
  }

  $("#buttonElement").on("click", function() {
    let curVal = $("#inputContent").val();
    createItem(curVal);
    myItems.push(curVal);
    saveItems();
  });

  $("#deleteAll").on("click", function() {
    deleteAll();
    saveItems();
  });

}

function createItem(itemValue) {

  $newElem = $("<li></li>").text(itemValue);
  $newElem.on("click", function() {
    removeItem(this);
  });
  $("#listOne").append($newElem);
}

function removeItem(item) {
  let itemText = $(item).text();
  let index = myItems.indexOf(itemText);
  if(index != -1){
    myItems.splice(index, 1);
    saveItems();
  }
  $(item).remove();
}

  function deleteAll(item){
    $("#listOne").children("li").each(function(){
      $(this).remove();
    });
    myItems = [];
    saveItems();
  }

function saveItems() {
  let myItemsString = JSON.stringify(myItems);
  localStorage.setItem(myKey, myItemsString);
}

$(function() {
  setupLocal();
});
