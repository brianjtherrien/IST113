function newElement() {
  var li = document.createElement("li"); //Creates variable sets it equal to li element
  var input = document.getElementById("personstask").value; //Creates variable and sets it equal to the personstask id
  var text = document.createTextNode(input);  //create varialbe and set the text to the input
  li.appendChild(text); // Add to the list

  if (input == '')
    {
      alert("Sorry, but I can't add nothing to the Task list.");
    }
  else
    {
      document.getElementById("tasks").appendChild(li);
    }
//If there is no text in the text area "error" with and alert telling the user to input something


    var li2 = document.createElement("span");
    var txt = document.createTextNode("X");
    li2.className = "remove";
    li2.appendChild(txt);
    li.appendChild(li2);

// Click on a close button to hide the current list item
  var close = document.getElementsByClassName("remove");
  var i;

  for (i = 0; i < close.length; i++)
  {
    close[i].onclick = function()
    {
    var div = this.parentElement;
    div.style.display = "none";
    }
  }
}
