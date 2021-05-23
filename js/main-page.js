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
        sessionStorage.setItem('isThereSearch', 'y');
        let searchResults = JSON.stringify(dataArr);
        sessionStorage.setItem('results', searchResults);
        window.location = 'profile.html';
    });
}

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

    // get all users
    fetch('https://vet-codeathon.herokuapp.com/users/')
        .then(response => response.json())
        .then(users => {
            console.log(users);

            let foundUser = false;
            // go through the users array to see if the email exists in the database
            for (let user of users) {
                if (user.email === email) { // email exists
                    foundUser = true;
                    let id = user.user_id;
                    $.ajax("https://vet-codeathon.herokuapp.com/users/auth/" + id, {
                        type: "POST",
                        data: {
                            "password": password
                        }
                    }).done((result) => {
                        console.log(result);
                        window.location = 'main-page-two.html';
                    }).fail(() => alert("Sorry, something went wrong... Please try again later."));
                }
            }

            if (foundUser === false) { // email doesn't match
                // get all the employees
                fetch('https://vet-codeathon.herokuapp.com/employees/')
                    .then(response => response.json())
                    .then(employees => {
                        console.log(employees);

                        let foundEmployee = false;
                        // go through the employees array to see if the email exists in the database
                        for (let employee of employees) {
                            if (employee.email === email) {
                                foundEmployee = true;
                                let id = employee.employee_id;
                                $.ajax("https://vet-codeathon.herokuapp.com/employees/auth/" + id, {
                                    type: "POST",
                                    data: {
                                        "password": password
                                    }
                                }).done((result) => {
                                    console.log(result);
                                    window.location = 'main-page-two.html';
                                }).fail(() => alert("Sorry, something went wrong... Please try again later."));
                            }
                        }

                        if (foundEmployee === false) {
                            alert("Sorry, you may enter the wrong email or password. You can try again or sign up.")
                        }
                    })
                    .catch(() => alert("Sorry, something went wrong... Please try again later."));
            }

        })
        .catch(() => alert("Sorry, something went wrong... Please try again later."));
    });