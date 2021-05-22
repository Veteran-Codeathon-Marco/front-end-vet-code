"use strict";
fetch('https://vet-codeathon.herokuapp.com/teams')
    .then(response => response.json())
    .then(teams => loadBussInfo(teams));

function loadBussInfo(teams){
    console.log(teams);
    $(".card-insert").html("");
    // let html = "";
    // html += "<div class='d-flex row w-100 justify-content-around mb-3'>";
    $(".card-insert").append(html);
    for (let team of teams) {
        let html = "";
        html += "<div class='d-flex col-4 flex-wrap card text-center' style='width: 18rem;'>";
        html += "<img src='" + team.team_image_url +"' class='card-img-top mx-auto' alt='...'>";
        html += "<div class='card-body'>";
        html += "<h5 class='card-title'>" + team.team_name + "</h5>";
        html += "<p class='card-text'>" + team.team_description + "</p>";
        html += "<div>";
        html += "<h6 class='d-flex flex-column align-items-start'>Phone: 555-555-5555</h6>";
        html += "<h6 class='d-flex flex-column align-items-start'>Services:</h6>";
        html += "<ul class='d-flex flex-column align-items-start'>";
        html += "<li>roof repair</li>";
        html += "<li>sprinkler repair</li>";
        html += "<li>bathroom remodel</li>";
        html += "</ul>";
        html += "</div>";
        html += "<a href='#' class='btn btn-primary'>More info</a>";
        html += "</div>";
        html += "</div>";

        $(".card-insert").append(html);

    }
    // html = "";
    // html += "</div>";
    // $(".card-insert").append(html);
    // html += "<div class='card-body'>";
    // html += "<h5 class='card-title'>"+ team.team_name +"</h5>";
    // html += "<p class='card-text'>We are a veteran owned business that specializes in home repairs</p>";
    // html += "<a href='#' class='btn btn-primary'>More info</a>";
    // html += "</div>";


}
// let teamsPost = {};
// teamsPost ={
//     name:"roland business",
//     categories:"technology",
//     description:"a haberdashary of stuff",
//     imageURL:"https://upload.wikimedia.org/wikipedia/commons/8/84/Paavo_Nurmi_in_his_store_in_1939.jpeg",
// };
//
// console.log(teamsPost)

// let userPost = {};
// userPost = {
//     firstName:"roland",
//     lastName:"valdez",
//     email:"roland@codeup.com",
//     password:"asdf",
//     imageURL:"www.yahoo.com",
// };

// console.log(userPost)
//
// let postTeam = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(teamsPost)
// };

// let postUser = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: userPost
// };
//
// fetch('https://vet-codeathon.herokuapp.com/users')
//     .then(response => response.json())
//     .then(user => console.log(user));

// fetch('https://vet-codeathon.herokuapp.com/users/new', userPost)
//     .then(response => fetch('https://vet-codeathon.herokuapp.com/users')
//         .then(response => response.json())
//         .then(user => console.log(user)));

    // $.ajax("https://vet-codeathon.herokuapp.com/users/new", {
    //     type: "POST",
    //     data: {
    //         "firstName": "roland",
    //         "lastName": "valdez",
    //         "email": "roland@gmail.com",
    //         "password": "asdf"
    //     }
    // });

// fetch('https://vet-codeathon.herokuapp.com/users')
//     .then(response => response.json())
//     .then(user => console.log(user));




fetch('https://vet-codeathon.herokuapp.com/teams')
    .then(response => response.json())
    .then(team => console.log(team));

// fetch('https://vet-codeathon.herokuapp.com/teams/new', postTeam)
//     .then(response => console.log("posted new team"));

// fetch('https://vet-codeathon.herokuapp.com/teams')
//     .then(response => response.json())
//     .then(team => console.log(team));
//
// fetch('https://vet-codeathon.herokuapp.com/posts')
//     .then(response => response.json())
//     .then(posts => console.log(posts));


// fetch(getURL, get)
//     .then(response => {
//         response.json()
//             .then(test => {
//                 console.log(test);
//             })
//     })

