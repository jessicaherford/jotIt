app.factory('BoardsService', ['$http', function ($http) {
  return {
    all: function () {
      return $http.get('/api/boards');
    },

    getBoard: function (board_id) {
      return $http.get('/api/boards/'+board_id);
    },

    getNote:function (note_id){
      return $http.get('/api/notes/'+note_id)
    },

    addBoard: function (newBoard) {
      return $http.post('/api/boards', newBoard);
    },
  }
}])




// the services call the back-end/api
