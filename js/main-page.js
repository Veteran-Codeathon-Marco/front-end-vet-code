"use strict";

/* --------------- Search database on click of search-button --------------- */
const grabData = () => {
    return fetch("https://vet-codeathon.herokuapp.com/businesses").then(response =>
        response.json());
}
let dataArr = [];
let searchDatabase = () => {
    grabData().then(function(info){
        const searchInput = $('#searchInput').val();
        for (let i = 0; i < info.length; i++) {
            if (info[i].business_name.toLowerCase().includes(searchInput.toLowerCase()) || info[i].business_categories.toLowerCase().includes(searchInput.toLowerCase())) {
                dataArr.push(info[i]);
            }
        }
    });
}
console.log(dataArr);

$('#search-button').click(function () {
    searchDatabase();
})

/* --------------- Remove alert --------------- */

$('.close').click(function () {
    $('.alert-box').hide();
})

/* --------------- Sell Post --------------- */
$('#btn-share').click((e) => {
    e.preventDefault();

    let name = $('#name').val(),
        type = "sell",
        price = $('#price').val(),
        amount = $('#amount').val(),
        description = $('#textarea').val(),
        image = $('#inputGroupFile01').val(),
        location = $('#location').val(),
        employeeID = $('#employeeID').val();

    $.ajax("https://vet-codeathon.herokuapp.com/posts/new", {
        type: "POST",
        data: {
            "type": type,
            "name": name,
            "price": price,
            "amount": amount,
            "description": description,
            "imageURL": image,
            "location": location,
            "employeeID": employeeID
        }
    }).done((data) => {
        console.log(data);
        window.location = 'profile.html';
    }).fail(() => alert("Sorry, something went wrong... Please try again later."));

});
// get sell-post information



// login modal function
// click "Sign in to your account" button
$('.btn-login').click((e) => {
    e.preventDefault();

    // get email and password
    let email = $('#username').val(),
        password = $('#sign_in_form_password').val();

    // do an ajax request to get id
    $.ajax("https://vet-codeathon.herokuapp.com/users/", {
        type: "POST",
        data: {
            "email": email,
            "password": password
        }
    }).done((data) => {
        console.log(data);
        // check if the email and password are in the users database
        if (data !== []) {
            // get the user id
            // go to main-two page
            window.location = 'main-page-two.html';
        } else {
            $.ajax("https://vet-codeathon.herokuapp.com/employees/", {
                type: "POST",
                data: {
                    "email": email,
                    "password": password
                }
            }).done((results) => {
                console.log(results);
                if (results === []) {
                    alert("Sorry, you may enter the wrong email or password. You can try again or sign up.")
                } else {
                    // get employee_id and business_id
                }
            }).fail(() => alert("Sorry, something went wrong... Please try again later."));
        }
    }).fail(() => alert("Sorry, something went wrong... Please try again later."));


    fetch('https://vet-codeathon.herokuapp.com/businesses/{id}')
    .then(response => response.json())
    .then(business => {
        console.log(business);
        // go to business profile page
        // window.location = 'business profile page';
    });

    ////////// need to take update
    // go to main-two page
    window.location = 'main-page-two.html';
});
