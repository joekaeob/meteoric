import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import 'ionic-scripts';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
 
angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  'ionic'
]);