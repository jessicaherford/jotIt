app.controller("MainController", ['$scope', 'BoardsService', function ($scope, BoardsService) {
  BoardsService.all().then(function (boards) {
    $scope.boards = boards.data;
  });


  // $scope.addBoard = function () {
  //   BoardsService.addBoard();
  // }
  $scope.board = {};
  $scope.addBoard = function () {
    var newBoard = $scope.board;
    console.log(newBoard);
    BoardsService.addBoard(newBoard).then(function (stuff) {
      console.log('we have received stuff ', stuff);
    });
  }
}]);

// app.controller("PostController", ['$scope', 'BoardsService', function ($scope, BoardsService) {

// });
