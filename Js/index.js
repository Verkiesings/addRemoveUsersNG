var app = angular.module("myApp", []);

app.controller("myController", function($scope) {
    $scope.title = "Home";
    $scope.users = [{
            "username": "Jack",
            "surname": "Puzzles"
        },
        {
            "username": "Mani",
            "surname": "Anderson"
        },
        {
            "username": "Rabi",
            "surname": "Matham"
        },
        {
            "username": "Dikgetho",
            "surname": "Phala"
        },
        {
            "username": "Jansen",
            "surname": "Deruala"
        }
    ]

    $scope.addUser = function() {

        if ($scope.username == "" && $scope.surname == "") {

            alert("error");

        } else {
            $scope.users.push({
                username: $scope.username,
                surname: $scope.surname
            });
            $scope.username = "";
            $scope.surname = "";
        }

    }
    var count = 1;
    $scope.delete = function($index) {
        $scope.users.splice($index, 1);
        $scope.count = "The number of users deleted: " + count++;
    }
});