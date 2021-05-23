"use strict";


$(document).ready(() => {

    // business profile set up
    // get business information from inputs and make an ajax request to send data to database
    $('.btn-finish').click((e) => {
        e.preventDefault();
        let businessAddress;
        if ($('#address-2').val() === undefined) {
            businessAddress = $('#address-1').val() + ", " + $('#city').val() + ", " + $('#state').val();
        } else {
            businessAddress = $('#address-1').val() + ", " + $('#address-2').val() + ", " + $('#city').val() + ", " + $('#state').val();
        }
        let businessName = $('#businessName').val(),
            phoneNumber = $('#phoneNumber').val(),
            category = $('#category option:selected').text(),
            productsServices = $('#productsServices').val();

        $.ajax("https://vet-codeathon.herokuapp.com/businesses/new", {
            type: "POST",
            data: {
                "name": businessName,
                "categories": category,
                "description": productsServices,
                "phoneNumber": phoneNumber,
                "address": businessAddress
            }
        }).done(() => {
            console.log("Everything went great!");
            // clear the sign up form after submitting the form
            $(':input','#create-profile-form')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .prop('checked', false)
                .prop('selected', false);
            window.location = 'main-page-two.html';
        }).fail(() => alert("Sorry, something went wrong... Please try again later."));
    });

    // personal profile set up
    // get personal info from inputs and make an ajax request to database

});


