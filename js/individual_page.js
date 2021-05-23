"use strict";

// Generates individual businesses profile page
function loadIndividualBusiness(){
    fetch('https://vet-codeathon.herokuapp.com/businesses')
        .then(response => response.json())
        .then(businesses => {
            let idBusiness = sessionStorage.getItem('idBusiness');
            idBusiness = Number(idBusiness);
            for (let business of businesses) {
                if (business.business_id == idBusiness) {
                    $(".insert_individual").html("");
                    let html = "";
                    html += "<div class='mb-5'>";
                    html += "<div class='container-fluid d-flex justify-content-center'>";
                    html += "<a class='navbar-brand text-center' href='#'>";
                    html += "<img id='companyPicture' src='" + business.business_image_url + "' alt='' class='d-inline-block'>";
                    html += "</a>";
                    html += "</div>";
                    html += "<h3 class='text-center'>" + business.business_name+ "</h3>";
                    let addressArr = business.address.split(",");
                    html += " <h5 class='text-center'>" + addressArr[0] + "</h5>";
                    html += " <h5 class='text-center'>" + addressArr[1] + ", " + addressArr[2]+ "</h5>";
                    html += "<h5 class='text-center'>Phone: " + business.phone_number + "</h5>";
                    // html += "<h5 class='text-center'><a href='https://www.bubbagump.com/'>www.bubbagump.com</a></h5>";
                    html += "</div>";
                    html += "<div class='d-flex row mt-1 w-100 m-0 p-0'>";

                    html += "<div class='d-flex flex-column col-4 m-0 px-5'>";
                    html += "<h4>Products and Services</h4>";
                    html += "<ul class='d-flex flex-column align-items-start'>";
                    let categories = business.business_categories;
                    let categoriesArrr = categories.split(",");
                    for( let individual of categoriesArrr){
                        html += "<li>" + individual + "</li>";
                    }
                    html += "</ul>";
                    html += "</div>";
                    html += "<div class='d-flex flex-column col-8 m-0 px-5'>";
                    html += "<h4>Selling:</h4>";
                    html += "<h6>Description: CNC replacement parts</h6>";
                    html += "<h6>Price: $35.99</h6>";
                    html += "<h6>Quantity Available: 5</h6>";
                    html += "<br>";
                    html += "<h4>Selling:</h4>";
                    html += "<h6>Description: Welding Rods</h6>";
                    html += "<h6>Price: $5.75</h6>";
                    html += "<h6>Quantity Available: 124</h6>";
                    html += "</div>";
                    html += "</div>";
                    $(".insert_individual").append(html);
                }
            }
        });
}
loadIndividualBusiness();