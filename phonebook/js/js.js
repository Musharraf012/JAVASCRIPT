let people = [];
let ind = -1;

function AddItems() {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const phoneNumber = document.getElementById("phonenumber").value;

    const newPerson = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    if (ind < 0) {
        people.push(newPerson);
    } else {
        people[ind] = newPerson;
        ind = -1; // Reset the index after update
    }
    
    display();
    clearForm();
}

function display() {
    let display = people.map(function (person, index) {
        return `<div class="person">
            <p>Name: ${person.firstName} ${person.lastName}</p>
            <p>Phone: ${person.phoneNumber}</p>
            <button class="edit-btn" onclick="EditItems(${index})">Edit</button>
            <button class="delete-btn" onclick="removeItems(${index})">Delete</button>
        </div>`;
    });
    document.getElementById("peopleList").innerHTML = display.join(" ");
}

function removeItems(index) {
    people.splice(index, 1);
    display();
}

function EditItems(index) {
    const person = people[index];
    document.getElementById("firstname").value = person.firstName;
    document.getElementById("lastname").value = person.lastName;
    document.getElementById("phonenumber").value = person.phoneNumber;
    ind = index;
}

function ClearItems() {
    people = [];
    display();
    clearForm();
}

function clearForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
}