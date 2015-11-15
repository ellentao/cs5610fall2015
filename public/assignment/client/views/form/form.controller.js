(function()
{
  angular
    .module("FormBuilderApp")
    .controller("FormController", FormController);
    
  function FormController($scope, $location, $rootScope, FormService)
  {
    var current_user = $rootScope.user;
    $scope.$location = $location;
    $scope.forms = [];
    if ($rootScope.user != null) {
      FormService.findAllFormsForUser(current_user.id).then(function(forms) {
        $scope.forms = forms;
      });
    }
    
    $scope.addForm = function ()
    {
      if ($rootScope.user != null && $scope.form.formName != null) {
        FormService.createFormForUser(current_user.id, $scope.form)
					.then(function (form) {
						$scope.forms.push(form);
						console.log("successfully added form");
						console.log($scope.forms);
					});
      }
    }
    
    $scope.updateForm = function ()
    { 
      if ($scope.currentForm != null) {
        $scope.currentForm.formName = $scope.form.formName;
        console.log("start updating:");
        console.log($scope.currentForm);
        FormService.updateFormById($scope.currentForm.id, $scope.currentForm).then(function (form) {
          console.log("successfully updated form");
          console.log($scope.forms);
        });
        $scope.currentForm = null;
      }
      FormService.findAllFormsForUser(current_user.id).then(function(forms) {
        $scope.forms = forms;
      });

    }
    
    $scope.deleteForm = function (index)
    {
      var formId = $scope.forms[index].id;
      $scope.forms.splice(index, 1);
      FormService.deleteFormById(formId).then(function (forms) {
        console.log("successfully deleted form");
        console.log($scope.forms);
      });
    }
    
    $scope.selectForm = function (index)
    {
      document.getElementById('formname').value = $scope.forms[index].formName;
      $scope.currentForm = $scope.forms[index];
      $scope.isSelected = true;
      console.log("current form is:")
      console.log($scope.currentForm);
    }
  }
})();