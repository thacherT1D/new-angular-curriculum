(function () {
  'use strict'

  angular.module('ClassCreatorApp')
    .controller('StatsController', StatsController)

  function StatsController ($rootScope) {
    this.course_id = ''

    this.showAverage = () => {
      let course = $rootScope.courses.filter(course => {
        return course.id === this.course_id
      })[0]

      if (!course) {
        this.averageGrade = 'N/A'
        return
      }

      let grades = course.students.map(student => student.grade)
      let indexAvg = grades.reduce((acc, grade) => {
        return acc + $rootScope.grades.indexOf(grade)
      }, 0) / course.students.length

      this.averageGrade = $rootScope.grades[Math.ceil(indexAvg)]
    }

    // { courses: [] }

    $rootScope.$watch('courses', () => {
        let courses = $rootScope.courses.length
        let students = $rootScope.courses.reduce((acc, course) => {
          return acc + course.students.length
        }, 0)
        this.totals = { courses, students }
        this.showAverage()
    }, true)
  }
})()
