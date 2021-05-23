"use strict";

// Show Movies/Create Movie cards
const grabData = () => {
    return fetch("https://vet-codeathon.herokuapp.com/businesses").then(response =>
        response.json());
}

let searchDatabase = () => {
    grabData().then(function(info){
        console.log(info);
        const searchInput = $('#search-bar').val();
        let dataArr = [];
        for (let i = 0; i < info.length; i++) {
            if (info[i].business_name.toLowerCase().includes(searchInput.toLowerCase()) || info[i].business_categories.toLowerCase().includes(searchInput.toLowerCase())) {
                dataArr.push(info[i]);
            }
        }
        console.log(dataArr);
    });
}




// Search Bar
$('#search-button').click(function(e) {
    e.preventDefault();
    const searchInput = $('#search-bar').val();
    console.log(searchInput);
    fetch("https://vet-codeathon.herokuapp.com/businesses").then(response => response.json()).then(function (info) {
        let searchDisplay = ``;
        for (let i = 0; i < info.length; i++) {
            if (info[i].name.toLowerCase().includes(searchInput.toLowerCase()) || info[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
                searchDisplay += `<div class="card" id="movie-card">
                    <img src="${info[i].poster}" class="card-img-top" alt="image" style="width: 250px; height: 336px;">
                    <div class="card-footer">
                        <h4 class="text-center">${info[i].title}</h4>
                        <button id="edit-movie-button" type="button" class="btn btn-primary">Edit</button>
                        <button id="delete-movie-button" type="button" class="btn btn-primary">Delete</button>
                    </div>
                </div>`

                document.getElementById('wrapper').innerHTML = (searchDisplay);
            }
        }
    })
})
