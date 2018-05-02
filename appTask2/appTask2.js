function TaskManager() {

  $("#addBtn").on("click", function()
    {
      let input = $("#personstask").val();
      $item = $("<li id=thingsß></li>").text(input);
      let next = $item;
      $("#Tasklabel").append($item);
    });
}

TaskManager();
