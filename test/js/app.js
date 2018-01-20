(function () {
    var app = angular.module("demo", ["ngRoute"]);
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider.when("/home", {
            templateUrl: "views/view-contacts.html",
            controller: function ($http) {
                this.contacts = [];
                var pb = this;
                $http.get("http://172.16.72.216:3000/contacts").then(function (res) {
                    pb.contacts = res.data
                }, function (res) {});
            },
            controllerAs: "store"
        }).when("/edit/:id", {
            templateUrl: "views/edit-contact.html",
            controller: function ($http, $routeParams) {
                var pb = this;
                this.contact = {};

                this.updateContact = function (contact) {
                    $http.put("http://172.16.72.216:3000/contacts/" + contactId, contact).then(function (res) {
                        console.log("updated");
                    }, function (res) {});
                }

                var contactId = $routeParams["id"];
                $http.get("http://172.16.72.216:3000/contacts/" + contactId).then(function (res) {
                    pb.contact = res.data
                }, function (res) {});
            },
            controllerAs: "store"
        }).when("/delete/:id",{
            templateUrl: "views/view-contacts.html",
            controller: function ($http, $routeParams) {
                var pb = this;
                this.contact = {};
                this.deleteContact = function(contact){
                    $http.delete("http://172.16.72.216:3000/contacts/" + contactId, contact).then(function(res)){
                        console.log("deleted");
                        }
                }
        })
    });
})();