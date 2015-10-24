(function()
{
  angular
    .module("FormBuilderApp")
    .factory("FormService", formService);
    
  function formService()
  {
    var forms = [];
    
    var service = {
      createFormForUser : createFormForUser,
      findAllFormsForUser : findAllFormsForUser,
      deleteFormById : deleteFormById,
      updateFormById : updateFormById
    };
    
    return service;
    
    function createFormForUser(userId, form, callback)
    {
      var newForm = {
        id: Guid.create(),
        userid: userId,
        formname: form.formname
      };
      forms.push(newForm);
      callback(forms);
    }
    
    function findAllFormsForUser(userId, callback)
    {
      var formsForUser = [];
      for (var i = 0; i < forms.length; i++) {
        if (forms[i].userid == userId) {
          formsForUser.add(forms[i]);
        }
      }
      callback(formsForUser);
    }
    
    function deleteFormById(formId, callback)
    {
      for (var i = 0; i < forms.length; i++) {
        if (forms[i] == formId) {
          var form = forms[i];
          var index = forms.indexOf(form);
          forms.splice(index, 1);
        }
      }
      callback(forms);
    }
    
    function updateFormById(formId, newForm, callback)
    {
      for (var i = 0; i < forms.length; i++) {
        if (forms[i] == formId) {
          forms[i] = {
            id: newForm.id,
            userid: newForm.userid,
            formname: newForm.formname
          };        
        }
      }
      callback(forms);
    }   
  }
})();