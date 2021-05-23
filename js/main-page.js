"use strict";

/* --------------- Search database on click of search-button --------------- */
const grabData = () => {
    return fetch("https://vet-codeathon.herokuapp.com/businesses").then(response =>
        response.json());
}

let searchDatabase = () => {
    grabData().then(function(info){
        const searchInput = $('#searchInput').val();
        let dataArr = [];
        for (let i = 0; i < info.length; i++) {
            if (info[i].business_name.toLowerCase().includes(searchInput.toLowerCase()) || info[i].business_categories.toLowerCase().includes(searchInput.toLowerCase())) {
                dataArr.push(info[i]);
            }
        }
        console.log(dataArr);
    });
}

$('#search-button').click(function () {
    searchDatabase();
})

/* --------------- Remove alert --------------- */

$('.close').click(function () {
    $('.alert-box').hide();
})