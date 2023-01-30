const submitBtn = document.getElementsByClassName("postButton");
const postBox = document.getElementsByClassName("write-post-container");

var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsmenu.classList.toggle(".settings-menu-height");
}

function validateForm(){
    const name = document.getElementById("name").value;

    if(name == ""){
        alert("Text is required");
        return false;
    }
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";
    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        // html += '<td><button onclick="deleteData('+index+')"
        // class="btn">Delete</button>'
    });
}
// EXAMPLE
// loadCategories: function () {
//     $.ajax({
//         url: this.basePath() + '/Categories?_sortExpression=CategoryName',
//         dataType: 'json',
//         cache: false,
//         success: function (data) {
//             $.each(data.Categories, function (index, category) {
//                 $('<option>').text(category.CategoryName)
//                 .attr('value', category.CategoryID).appendTo($('#CategoryID'));
//             })
//         }
//     });
// }   
// deleteProduct: function () {
//     if (!confirm('Delete?')) return;
//     $.ajax({
//         url: this.createProductUrl('DELETE'),
//         dataType: 'json',
//         type: 'DELETE',
//         data: ProductManager.collectFieldValues(),
//         success: function (result) {
//             if (result.errors)
//                 alert(result.errors[0].message);
//             else
//                 ProductManager.refreshSearch();
//         }
//     });
// },


document.onload = showData();

function AddData(){

    if(validateForm() == true){
        const name = document.getElementById("name").value;

        var peopleList;
        if(localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name
        });

        localStorage.setItem("peopleList")
    }
}
