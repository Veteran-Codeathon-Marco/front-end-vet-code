"use strict";


$(document).ready(() => {

    // business profile set up
    // get business information from inputs and make an ajax request to send data to database
    $('#btn-business').click((e) => {
        e.preventDefault();
        let businessAddress;
        if ($('#address-2').val() === undefined) {
            businessAddress = $('#address-1').val() + ", " + $('#city').val() + ", " + $('#state').val();
        } else {
            businessAddress = $('#address-1').val() + ", " + $('#address-2').val() + ", " + $('#city').val() + ", " + $('#state').val();
        }

        // get business info
        let businessName = $('#businessName').val(),
            phoneNumber = $('#phoneNumber').val(),
            category = $('#category option:selected').text(),
            productsServices = $('#productsServices').val();

        // do an ajax post request to create a business account in the database
        $.ajax("https://vet-codeathon.herokuapp.com/businesses/new", {
            type: "POST",
            data: {
                "name": businessName,
                "categories": category,
                "description": productsServices,
                "phoneNumber": phoneNumber,
                "address": businessAddress
            }
        }).done((data) => {
            console.log("Everything went great!");

            let businessId = data.id;
            console.log(businessId);

            let employeeInfo = JSON.parse(sessionStorage.getItem('employeeInfo'));
            employeeInfo.businessID = businessId;

            // business account go to employees page
            $.ajax("https://vet-codeathon.herokuapp.com/employees/new", {
                type: "POST",
                data: employeeInfo
            }).done((data) => {
                console.log("Everything went great!");

                // store id
                // sessionStorage.getItem(data); // has to be a string
                data = JSON.stringify(data);
                sessionStorage.setItem('id', data);

                goToNextPage('create-business-profile.html');
            }).fail(() => alert("Sorry, something went wrong... Please try again later."));


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
    $('#btn-personal').click((e) => {
        e.preventDefault();

        // get user's address
        let userAddress;
        if ($('#user-address-2').val() === undefined) {
            userAddress = $('#user-address-1').val() + ", " + $('#user-city').val() + ", " + $('#user-state').val();
        } else {
            userAddress = $('#user-address-1').val() + ", " + $('#user-address-2').val() + ", " + $('#user-city').val() + ", " + $('#user-state').val();
        }

        // do an ajax post request to add address to personal account in the database
        $.ajax("https://vet-codeathon.herokuapp.com/users/new", () => {

        }).done();
    })

});


