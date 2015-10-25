(function()
{
  angular
    .module("FormBuilderApp")
    .controller("FormController", FormController);
    
  function FormController($scope, $location, $rootScope, FormService)
  {
    $scope.$location = $location;
    if ($rootScope.user != null) {
      FormService.findAllFormsForUser($rootScope.user.id, function(forms) {
        $scope.forms = forms;
      });
    }
    
    $scope.addForm = function ()
    {
      if ($rootScope.user != null) {
        FormService.createFormForUser($rootScope.user.id, $scope.form, function (form) {
          $scope.forms.push(form);
          console.log("successfully added form");
        });
      }
    }
    
    $scope.updateForm = function (index)
    {
      var formId = $scope.forms[index].id;
      FormService.updateFormById(formId, $scope.form, function (form) {     
      });
    }
    
    $scope.deleteForm = function (index)
    {
      var formId = $scope.forms[index].id;
      FormService.deleteFormById(formId, function (forms) {
        $scope.forms = forms;
        console.log("successfully deleted form");
      });
    }
    
    $scope.selectForm = function (index)
    {
      var formId = $scope.forms[index].id;
      FormService.updateFormById(formId, function (form) {
      });
    }
  }
})();