(function () {
  'use strict'

  angular.module('ClassCreatorApp')
    .controller('GradeController', GradeController)

  function GradeController ($rootScope) {
    $rootScope.grades = [
      'F',
      'D-', 'D', 'D+',
      'C-', 'C', 'C+',
      'B-', 'B', 'B+',
      'A-', 'A', 'A+'
    ]

    this.change = (incr, student) => {
      let { grades } = $rootScope
      let index = grades.indexOf(student.grade)
      let newGrade = (incr ? grades[index+1] : grades[index-1]) || student.grade
      student.grade = newGrade
    }
  }
})()
