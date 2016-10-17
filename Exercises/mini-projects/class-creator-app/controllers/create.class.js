(function () {
  'use strict'

  angular.module('ClassCreatorApp')
    .controller('CreateClassController', CreateClassController)

  function CreateClassController ($rootScope) {
    $rootScope.id = 1

    $rootScope.courses = [{
      id: $rootScope.id++,
      name: 'History',
      teacher: 'Professor Plum',
      students: [
        { id: $rootScope.id++, name: 'John Doe', grade: 'C' },
        { id: $rootScope.id++, name: 'Jane Smith', grade: 'C' }
      ]
    }]

    this.course = initClass()

    this.create = () => {
      $rootScope.courses.push(this.course)
      this.course = initClass()
    }

    function initClass () {
      return {
        id: $rootScope.id++,
        name: '',
        teacher: '',
        students: []
      }
    }
  }
})()
