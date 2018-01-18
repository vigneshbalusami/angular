(function () {
    var app = angular.module("demo", []);
    app.controller("StoreController", function () {
        this.contacts1 = contact; 
    });
    var contact = [{
        name: "kaviyarasu",
        dob : "16-02-1997",
        email : "kaviyarrasu@gmail.com",
        phone : 9724462862
        }, {
        name: "sundhar ",
        dob : "29-04-1997",
        email : "smoorthy@gmail.com",
        phone : 8137294763
        },
        {
            name: "nandharkumar",
            dob: "02-07-1996",
            email : "nandhakumar@gmail.com",
            phone : 8362750372
        },
        {
            name: "obulisathish",
            dob : "23-03-1997",
            email : "obulisathish@gmail.com",
            phone : 9736749239
        }];
})();
