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
			console.log(current_user.password);
			
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
    
    model.addForm = function (form)
    {
      if ($rootScope.user != null && form != null) {
        FormService.createFormForUser(current_user._id, model.form)
					.then(function (form) {
						model.forms.push(form);
						console.log("successfully added form");
						console.log(model.forms);
					});
      }
    }
    
    model.updateForm = function (form)
    { 
      if (model.currentForm != null) {
        model.currentForm.title = form.title;
        console.log("start updating:");
        console.log(model.currentForm);
        FormService.updateFormById(model.currentForm._id, model.currentForm).then(function (form) {
          console.log("successfully updated form");
          console.log(model.forms);
        });
        model.currentForm = null;
      }
      FormService.findAllFormsForUser(current_user._id).then(function(forms) {
        model.forms = forms;
      });

    }
    
    model.deleteForm = function (index)
    {
      var formId = model.forms[index]._id;
      model.forms.splice(index, 1);
      FormService.deleteFormById(formId).then(function (forms) {
        console.log("successfully deleted form");
        console.log(model.forms);
      });
    }
    
    model.selectForm = function (index)
    {
      document.getElementById('title').value = model.forms[index].title;
      model.currentForm = model.forms[index];
      model.isSelected = true;
      console.log("current form is:")
      console.log(model.currentForm);
    }
  }
})();