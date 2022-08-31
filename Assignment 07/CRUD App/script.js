function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["address"] = document.getElementById("address").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["state"] = document.getElementById("state").value;
    formData["city"] = document.getElementById("city").value;
    formData["zipCode"] = document.getElementById("zipCode").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2 = innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3 = innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4 = innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
    cell5 = innerHTML = data.state;
    cell6 = newRow.insertCell(5);
    cell6 = innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7 = innerHTML = data.zipCode;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a>Edit</a>
                       <a>Delete</a>` 
}