app.controller("MainController", ['$scope', '$http', 'BoardsService', function ($scope, $http, BoardsService) {
  BoardsService.all().then(function (boards) {
    $scope.boards = boards.data;
  });


  // $scope.addBoard = function () {
  //   BoardsService.addBoard();
  // }
  $scope.board = {};
  $scope.addBoard = function () {
    var newBoard = $scope.board;
    BoardsService.addBoard(newBoard).then(function (stuff) {
      BoardsService.all().then(function (boards) {
        $scope.boards = boards.data;
      });
      $scope.boards.push(stuff.title)
    });
  }
}]);

app.controller("BoardShowController", function($scope, BoardsService, $routeParams){
  the_id = $routeParams.id;
  console.log("my params are "+the_id);
  BoardsService.getBoard(the_id).then(function(payload){
    console.log("we are getting ONE board named: "+payload.data.title);
    $scope.singleBoard = payload.data;
  }, function(error){
    console.log("an error occurred");
  });
});

// app.controller("PostController", ['$scope', 'BoardsService', function ($scope, BoardsService) {

// });
