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


  document.getElementById("personstask").value = ""; //Get what the user entered and set it equal to nothing to clear area
  li.appendChild(span);
}
