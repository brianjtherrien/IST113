function fun() {

  $("#addBtn").on("click", function()
    {
      let input = $("#personstask").val();
      $item = $("<li id=thingsß></li>").text(input);
      let bye = $item;
      $("#tasks").append($item);

    });
}

fun();
