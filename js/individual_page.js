"use strict";
function loadIndividualBusiness(){
    fetch('https://vet-codeathon.herokuapp.com/businesses')
        .then(response => response.json())
        .then(businesses => {
            let idBusiness = sessionStorage.getItem('idBusiness');
            idBusiness = Number(idBusiness);
            for (let business of businesses) {
                if (business.business_id == idBusiness) {
                    $(".insert_individual").html("");
                    // selectedBusiness = business.business_id;
                    let html = "";
                    html += "<div class='mb-5'>";
                    html += "<div class='container-fluid d-flex justify-content-center'>";
                    html += "<a class='navbar-brand text-center' href='#'>";
                    html += "<img id='companyPicture' src='img/bubbagump.jpg' alt='' class='d-inline-block'>";
                    html += "</a>";
                    html += "</div>";
                    html += "<h3 class='text-center'>" + business.business_name+ "</h3>";
                    html += " <h5 class='text-center'>123 Main Street</h5>";
                    html += " <h5 class='text-center'>San Antonio, TX 78251</h5>";
                    html += "<h5 class='text-center'>Phone: 555-555-5555</h5>";
                    html += "<h5 class='text-center'><a href='https://www.bubbagump.com/'>www.bubbagump.com</a></h5>";
                    html += "</div>";
                    html += "<div class='d-flex row mt-1 w-100 m-0 p-0'>";
                    html += "<div class='d-flex flex-column col-6 m-0 px-5'>";
                    html += "<h4>Payment Methods</h4>";
                    html += "<ul>";
                    html += "<li>cash</li>";
                    html += "<li>credit card</li>";
                    html += "<li>paypal</li>";
                    html += "</ul>";
                    html += "</div>";
                    html += "<div class='d-flex flex-column col-6 m-0 px-5'>";
                    html += "<h4>Selling</h4>";
                    html += "<ul>";
                    html += "<li>pineapple shrimp</li>";
                    html += "<li>lemon shrimp</li>";
                    html += "<li>coconut shrimp</li>";
                    html += "<li>pepper shrimp</li>";
                    html += "</ul>";
                    html += "</div>";
                    html += "</div>";
                    $(".insert_individual").append(html);
                }
            }
        });
}
loadIndividualBusiness();