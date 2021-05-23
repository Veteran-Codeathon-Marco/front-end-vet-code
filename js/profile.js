"use strict";
// Determine if there anything in session storage and display accordingly
let searchOption = sessionStorage.getItem('isThereSearch');
alert(searchOption);
if (searchOption == 'y'){
    let searchbarData = JSON.parse(sessionStorage.getItem('results'));
        sessionStorage.setItem('isThereSearch', 'n');
    loadBussInfo(searchbarData);
}
else {

    fetch('https://vet-codeathon.herokuapp.com/businesses')
        .then(response => response.json())
        .then(businesses => {
            loadBussInfo(businesses);
        });
}


//Function to Generate html of profile market place
function loadBussInfo(businesses){
    $(".card-insert").html("");
    for (let business of businesses) {
        let categories = business.business_categories;
        let categoriesArrr = categories.split(",");
        let html = "";
        html += "<div class='d-flex flex-wrap justify-content-center card text-center mx-1 my-3' style='width: 18rem;'>";
        html += "<img src='" + business.business_image_url +"' class='card-img-top mx-auto mt-3' alt='...'>";
        html += "<div class='card-body'>";
        html += "<h5 class='card-title'>" + business.business_name + "</h5>";
        html += "<p class='card-text'>" + business.business_description + "</p>";
        html += "<div>";
        html += "<h6 class='d-flex flex-column align-items-start'>Phone: " + business.phone_number + "</h6>";
        html += "<h6 class='d-flex flex-column align-items-start'>Products/Services:</h6>";
        html += "<ul class='d-flex flex-column align-items-start'>";
        for( let individual of categoriesArrr){
            html += "<li>" + individual + "</li>";
        }
        html += "</ul>";
        html += "</div>";
        html += "<a id='" + business.business_id + "' onClick='store_id(this.id)' href='profile_individual_view.html' class='more-info btn btn-primary'>More info</a>";
        html += "</div>";
        html += "</div>";
        $(".card-insert").append(html);
    }
}


//Stores business ID to be able to know what business was selected.
function store_id(clicked_id){
  sessionStorage.setItem('idBusiness', clicked_id);
}
