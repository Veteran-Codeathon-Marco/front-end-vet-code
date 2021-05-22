"use strict";
// function loadBussInfo(){
//     $(".card-body").html("");
//     let html = "";
//     html += "<div class='card-body'>";
//     html += "<h5 class='card-title'>Business name</h5>";
//     html += "<p class='card-text'>We are a veteran owned business that specializes in home repairs</p>";
//     html += "<a href='#' class='btn btn-primary'>More info</a>";
//     html += "</div>";
//
//     $(".card-body").html(html);
// }
let getURL = "https://vet-codeathon.herokuapp.com/users";
let get = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
};

fetch(getURL, get)
    .then(response => {
        response.json()
            .then(test => {
                console.log(test);
            })
    })