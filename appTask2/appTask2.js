function fun() {

  $("#addBtn").on("click", function()
    {
      let input = $("#personstask").val();
      $item = $("<li id=thingsß></li>").text(input);
      let bye = $item;
      $("#tasks").append($item);
      $remove = $("<button type=button id='remove' > X </button>");
      $remove.click(function() {
      bye.remove(":visible");
      });
      $item.append($remove);
    });
}

fun();
