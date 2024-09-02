//Variables
const names = "John, Pete, Mary, Jane, Bob, Ann, Kate, Josue, Elian";
let arrNames = names.split(", ");
let newName = "";

document.getElementById("nameList").innerHTML = arrNames.join(", ");

function addNewName() {
  let button = document.querySelector("button");
  button.disabled = true;
  //Ingreso de nombre
  newName = prompt("Enter a name");
  noNull();

  button.disabled = false;
}

function noNull() {
  if (newName === null || newName.trim() === "") {
    alert("You canceled the operation");
    return;
  } else {
    noRepeat();
  }
}

function noRepeat() {
  let normalizedNewName = newName.trim().toUpperCase();
  let normalizedArrNames = arrNames.map((name) => name.toUpperCase());

  if (normalizedArrNames.includes(normalizedNewName)) {
    alert("This name is already in the list");
    return;
  } else {
    alert("Thanks for you registration");
    arrNames.push(newName);
    document.getElementById("nameList").innerHTML = arrNames.join(", ");
  }
}
