"use strict";

$(document).ready(() => {
    // check if the passwords are the same
    $('#password-repeat').on ('input', function (e) {
        e.preventDefault();
        let i = 0;
        console.log(i);
        if ($('#password').val() === $('#password-repeat').val()) {
            console.log(i++);
            $('.fa-check').toggleClass('hidden', 'visible');
        }
    });

    // click next button to create account in database and go to next page
    $('#btn-next').click((e) => {
        e.preventDefault();

        // get the user inputs
        let firstName = $('#firstName').val(),
            lastName = $('#lastName').val(),
            emailAddress = $('#email').val(),
            password = $('#password').val(),
            accountType = $('#account-type option:selected').text();

        console.log(accountType);

        // check what type of account the user is trying to make
        if (accountType === "Personal account") {
            // do an ajax post request to users page to create account in database
            $.ajax("https://vet-codeathon.herokuapp.com/users/new", {
                type: "POST",
                data: {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": emailAddress,
                    "password": password
                }
            }).done((data) => {
                console.log("Everything went great!");

                // store user-id in local store for later
                sessionStorage.getItem(data);
                goToNextPage('create-personal-profile.html');
            }).fail(() => alert("Sorry, something went wrong... Please try again later."));
        } else {
            // business account go to employees page
            $.ajax("https://vet-codeathon.herokuapp.com/employees/new", {
                type: "POST",
                data: {
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": emailAddress,
                    "password": password
                }
            }).done((data) => {
                console.log("Everything went great!");

                // store id
                // sessionStorage.getItem(data); // has to be a string
                data = JSON.stringify(data);
                sessionStorage.setItem('id', data);

                goToNextPage('create-business-profile.html');
            }).fail(() => alert("Sorry, something went wrong... Please try again later."));
        }
    });
});


function goToNextPage(location) {
    // clear the sign up form after submitting the form
    $(':input','#sign-up-form')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .prop('checked', false)
        .prop('selected', false);

    // go to next page
    window.location = location;
}
