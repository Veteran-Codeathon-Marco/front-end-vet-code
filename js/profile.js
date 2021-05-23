"use strict";
fetch('https://vet-codeathon.herokuapp.com/businesses')
    .then(response => response.json())
    .then(businesses => loadBussInfo(businesses));

function loadBussInfo(businesses){
    $(".card-insert").html("");
    for (let business of businesses) {
        let categories = business.business_categories;
        let categoriesArrr = categories.split(",");
        let html = "";
        html += "<div class='d-flex flex-wrap justify-content-center card text-center mx-1 my-3' style='width: 18rem;'>";
        html += "<img src='" + business.business_image_url +"' class='card-img-top mx-auto' alt='...'>";
        html += "<div class='card-body'>";
        html += "<h5 class='card-title'>" + business.business_name + "</h5>";
        html += "<p class='card-text'>" + business.business_description + "</p>";
        html += "<div>";
        html += "<h6 class='d-flex flex-column align-items-start'>Phone: 555-555-5555</h6>";
        html += "<h6 class='d-flex flex-column align-items-start'>Services:</h6>";
        html += "<ul class='d-flex flex-column align-items-start'>";
        for( let individual of categoriesArrr){
            html += "<li>" + individual + "</li>";
        }
        html += "</ul>";
        html += "</div>";
        html += "<a id='" + business.business_id + "' onClick='store_id(this.id)' href='profile_individual_view.html' class='more-info btn btn-primary'>More info</a>";
        html += "</div>";
        html += "</div>";
        $(".card-insert").append(html);
    }
}

function store_id(clicked_id)
{
  sessionStorage.setItem('idBusiness', clicked_id);
}
// $(".more-info").click(function (){
//     let business_id = this.id;
//     sessionStorage.setItem('idBusiness', business_id);
// });

// let businesssPost = {};
// businesssPost ={
//     name:"roland business",
//     categories:"technology",
//     description:"a haberdashary of stuff",
//     imageURL:"https://upload.wikimedia.org/wikipedia/commons/8/84/Paavo_Nurmi_in_his_store_in_1939.jpeg",
// };
//
// console.log(businesssPost)

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
// let postbusiness = {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(businesssPost)
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
//
// $.ajax("https://vet-codeathon.herokuapp.com/employees/new", {
//     type: "POST",
//     data: {
//         "firstName": "roland",
//         "lastName": "valdez",
//         "email": "roland@gmail.com",
//         "password": "asdf"
//     }
// });
// $.ajax("https://vet-codeathon.herokuapp.com/employees/new", {
//     type: "POST",
//     data: {
//         "firstName": "andrew",
//         "lastName": "walsh",
//         "email": "andrew@gmail.com",
//         "password": "asdf"
//     }
// });
// $.ajax("https://vet-codeathon.herokuapp.com/employees/new", {
//     type: "POST",
//     data: {
//         "firstName": "nic",
//         "lastName": "martinez",
//         "email": "nic@gmail.com",
//         "password": "asdf"
//     }
// });
// $.ajax("https://vet-codeathon.herokuapp.com/businesses/new", {
//     type: "POST",
//     data: {
//         "name": "codeup",
//         "categories": "programming, school, bootcamp",
//     }
// });
// $.ajax("https://vet-codeathon.herokuapp.com/businesses/new", {
//     type: "POST",
//     data: {
//         "name": "bubba gump",
//         "categories": "restaurant, seafood",
//     }
// });
// $.ajax("https://vet-codeathon.herokuapp.com/businesses/new", {
//     type: "POST",
//     data: {
//         "name": "codeup",
//         "categories": "programming",
//     }
// });
// $.ajax("https://vet-codeathon.herokuapp.com/users/posts", {
//     type: "POST",
//     data: {
//         type: "Buy",
//         employeeID:,
//         name:"roland"
//     }
// });
// fetch('https://vet-codeathon.herokuapp.com/users')
//     .then(response => response.json())
//     .then(user => console.log(user));




// fetch('https://vet-codeathon.herokuapp.com/businesss')
//     .then(response => response.json())
//     .then(business => console.log(business));

// fetch('https://vet-codeathon.herokuapp.com/businesss/new', postbusiness)
//     .then(response => console.log("posted new business"));

// fetch('https://vet-codeathon.herokuapp.com/businesss')
//     .then(response => response.json())
//     .then(business => console.log(business));
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

// fetch('https://vet-codeathon.herokuapp.com/posts')
//     .then(response => response.json())
//     .then(businesses => console.log(businesses));
