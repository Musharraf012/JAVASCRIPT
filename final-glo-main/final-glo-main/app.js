let items = [];

function addItems()
{
    const item = document.getElementById("grocery").value
    items.push(item);
    display()
}


function display()
{
let display=items.map(function(value)
{
    return`<div class="grocery-item">
    ${value} 
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button> 
  </div>`});
  document.getElementById("items").innerHTML = display.join("");}

  function removeitems()
  {
    items.splice(index,1);
    display();
  };
  function clearitems()
  (
    items.splice(0);
    display();
  );