app.factory('BoardsService', ['$http', function ($http) {
  return {
    all: function () {
      return $http.get("http://localhost:3000/boards", {method: "jsponp"});
    },

    getBoard: function (board_id) {
      return $http.get("http://localhost:3000/boards/"+board_id);
    },

    addBoard: function (newBoard) {
      return $http.post("http://localhost:3000/boards", newBoard);
    },


  }
}])

// the services call the back-end/api
