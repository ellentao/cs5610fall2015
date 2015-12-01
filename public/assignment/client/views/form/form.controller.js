(function()
{
  angular
    .module("FormBuilderApp")
    .controller("FormController", FormController);
    
  function FormController($location, $rootScope, FormService)
  {
		var model = this;
    var current_user = $rootScope.user;
		console.log("rootScope User is: ");
		console.log(current_user);
		
		model.$location = $location;
		if (current_user != null) {
			console.log("rootScope User Id is: ");
			console.log(current_user._id);
			
			FormService
				.findAllFormsForUser(current_user._id)
				.then(function(response) {
					model.forms = response;
				});
			console.log("all forms for user: ");
			console.log(model.forms);
			console.log("current user id is: ");
			console.log(current_user._id);
		} else {
			model.forms = [];
		}
    
		model.saveFormId = function (form)
		{
			$rootScope.formId = form._id;
		}
				
    model.addForm = function (form)
    {
			console.log("form title is: ");
			console.log(form.title);
      if ($rootScope.user != null && form != null) {
        FormService.createFormForUser(current_user._id, form)
					.then(function (result) {
						console.log("Successfully added form: ")
						console.log(result);
						model.forms.push(result);
						console.log("the current forms are: ");
						console.log(model.forms);
					});
      }
    }
    
    model.updateForm = function (form)
    { 
			FormService.updateFormById(form._id, form).then(function (newform) {
				FormService.findAllFormsForUser(current_user._id).then(function(forms) {
					model.forms = forms;
				});
				console.log("successfully updated form");
				console.log(newform);
				console.log(model.forms);
			});
    }
    
    model.deleteForm = function (form)
    {
      FormService.deleteFormById(form._id).then(function (forms) {
				FormService
					.findAllFormsForUser(form.userId)
					.then(function (result) {
						model.forms = result;																								
					});
        console.log("successfully deleted form");
        console.log(model.forms);
      });
    }
    
    model.selectForm = function (form)
    {	
			FormService.getFormById(form._id).then(function (form) {
				model.form = form;
        console.log("successfully selected form");
        console.log(form);
      });
    }
  }
})();