"use strict";

$.ajax("https://vet-codeathon.herokuapp.com/users/new", {
    type: "POST",
    data: {
        "firstName": "roland",
        "lastName": "valdez",
        "email": "roland@gmail.com",
        "password": "asdf"
    }
});