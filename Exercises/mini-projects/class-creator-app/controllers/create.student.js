(function () {
  'use strict'

  angular.module('ClassCreatorApp')
    .controller('CreateStudentController', CreateStudentController)

  function CreateStudentController ($scope, $rootScope) {
    this.student = initStudent()

    this.create = () => {
      let course = $rootScope.courses.filter(course => {
        return course.id === this.student.course_id
      })[0]

      course.students.push(this.student)
      this.student = initStudent()
    }

    function initStudent () {
      return {
        id: $rootScope.id++,
        course_id: '',
        name: '',
        grade: 'C'
      }
    }
  }
})()
