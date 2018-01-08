'use strict';

// Include Gulp & tools we'll use
const gulp = require('gulp');
// data-maker
const del = require('del')
const dealExcel = require('./src/components/node/deal-excel.js');

gulp.task('build', function () {
  let pathOfExcel = 'excel/test.csv';
  let jsonPath = 'json/';
  del.sync(jsonPath + '*');
  dealExcel.createJsonFromDir(pathOfExcel, jsonPath);
});
