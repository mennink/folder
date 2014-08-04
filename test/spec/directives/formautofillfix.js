'use strict';

describe('Directive: formAutofillFix', function () {

  // load the directive's module
  //beforeEach(module('folderApp'));

  //var element,
  //  scope;

  //beforeEach(inject(function ($rootScope) {
  //  scope = $rootScope.$new();
  //}));

  //it('should make hidden element visible', inject(function ($compile) {
  //  element = angular.element('<form-autofill-fix></form-autofill-fix>');
   // element = $compile(element)(scope);
   // expect(element.text()).toBe('this is the formAutofillFix directive');
  //}));
  var element, scope, compile, defaultData,
      validTemplate = '<form-autofill-fix>this is the formAutofillFix directive</form-autofill-fix>';

  function createDirective(data, template) {
    var elm;

    // Setup scope state
    scope.data = data || defaultData;

    // Create directive
    elm = compile(template || validTemplate)(scope);

    // Trigger watchers
    //scope.$apply();

    // Return
    return elm;
  }

  beforeEach(function () {

    // Load the directive's module
    module('folderApp');

    // Reset data each time
    defaultData = 42;



    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  describe('when created', function () {
    // Add specs
  });

  describe('when the model changes', function () {
    // Add specs
  });

  return describe('when destroyed', function () {
    // Add specs
  });
});
