angular.module('todoApp').factory('todoService', function(){
  var todos = []
  return {
    getTodos: function(){
      return todos;
    },
    addTodo: function(todo){
      todo.editFormShowing = false;
      todos.push(todo);
    },
    editTodo: function(index,todo){
      todos.splice(index, 1, todo);
      todo.editFormShowing = false
    },
    removeTodo: function(index){
      todos.splice(index, 1);
    }
  }
})