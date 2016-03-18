app.controller("SplashController", ['$scope', '$http', '$route', function($scope, $http, $route, BoardService){
   // no instance variables here....
}]);

app.controller("MainController", ['$scope', '$http', '$route', 'BoardsService', function ($scope, $http, $route, BoardsService) {
  $scope.reloadRoute = function () {
    $route.reload();
  };
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

app.controller("BoardShowController", function($scope, BoardsService, $routeParams, $route){
  the_id = $routeParams.id;
  BoardsService.getBoard(the_id).then(function(payload){
    $scope.singleBoard = payload.data;
  }, function(error){
  });
});

app.controller("ChatController", function($scope) {
  $scope.chatMessages = [];

  $scope.formatChat = function(icon,username,text,origDt) {
    var chat = {};
    chat.icon = icon;
    chat.username = username;
    chat.text = text;
    chat.origDt = origDt;
    return chat;
  }

  $scope.addChat = function() {
    if ($scope.newChatMsg != "") {
      var chat = $scope.formatChat("https://placehold.it/16x16",
                           "steve",
                           $scope.newChatMsg,
                           new Date());

      $scope.chatMessages.push(chat);
      $scope.newChatMsg = "";
    }
    else {

    }
  }

});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

// app.controller("PostController", ['$scope', 'BoardsService', function ($scope, BoardsService) {

// });
