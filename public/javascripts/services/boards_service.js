app.factory('BoardsService', ['$http', function ($http) {
  return {
    all: function () {
      return $http.get('/boards');
    },

    getBoard: function (board_id) {
      return $http.get('/boards/board_id'+board_id);
    },

    addBoard: function (newBoard) {
      return $http.post('/boards', newBoard);
    }

  }
}])

// the services call the back-end/api
