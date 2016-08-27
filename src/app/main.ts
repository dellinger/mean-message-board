/// <reference path="../../typings/index.d.ts" />

class MainController {
  constructor() {
    'ngInject';
  }

  public postMessage() {
    console.log('post');
  }

}


angular
  .module('app')
  .component('app', {
    templateUrl: 'app/main.html',
    controller: MainController,
    controllerAs: 'main'
  });
