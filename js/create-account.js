"use strict";

$(document).ready(() => {
    // business profile set up
    // get business information from inputs and make an ajax request to send data to database

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

    $('#btn-next').click((e) => {
        e.preventDefault();

        let firstName = $('#firstName').val(),
            lastName = $('#lastName').val(),
            emailAddress = $('#email').val(),
            password = $('#password').val();

        console.log(firstName);
        console.log(lastName);
        console.log(emailAddress);
        console.log(password);

        $.ajax("https://vet-codeathon.herokuapp.com/users/new", {
            type: "POST",
            data: {
                "firstName": firstName,
                "lastName": lastName,
                "email": emailAddress,
                "password": password
            }
        }).done(() => {
            console.log("Everything went great!");
            // clear the sign up form after submitting the form
            $(':input','#sign-up-form')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .prop('checked', false);
            window.location = 'create-profile.html';
        }).fail(() => alert("Sorry, something went wrong... Please try again later."));
    });

    // personal profile set up
    // get personal info from inputs and make an ajax request to database

});