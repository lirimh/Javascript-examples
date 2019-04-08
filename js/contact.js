function validateForm(){
	//modal to show errors
	var hasError = false;
	for (var i = 0; i < document.getElementsByClassName('error-label').length; i++) {
		document.getElementsByClassName('error-label')[i].style.display = "none";
	}
	var name = document.getElementById('inputName').value;
	if(name === ""){
		//error name cannot be empty
		document.getElementById('inputNameRequired').style.display = "block";
		hasError = true;
	}else{
		//error name cannot be symbol or number(only text)
		var reg = /^[a-zA-Z]+$/;
		if(!reg.test(name)){
			document.getElementById('inputNameInvalid').style.display = "block";
			hasError = true;
		}

	}
	var surname = document.getElementById('inputSurname').value;
	if(surname === ""){
		// error surname cannot be empty
		document.getElementById('inputSurnameRequired').style.display = "block";
		hasError = true;
	}else{
		//error sunrname cannot be symbol or number(only text)
		var reg = /^[a-zA-Z]+$/;
		if(!reg.test(surname)){
			document.getElementById('inputSurnameInvalid').style.display = "block";
			hasError = true;
		}
	}
	var email = document.getElementById('inputEmail').value;
	if(email === ""){
		//error email cannot be empty
		document.getElementById('inputEmailRequired').style.display = "block";
		hasError = true;
	}else{
		//error email is invalid format
		 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		 if(!re.test(email)){
			document.getElementById('inputEmailInvalid').style.display = "block";
			hasError = true;
		 }
	}
	var age = document.getElementById('inputAge').value;
	if(age === ""){
		//error age cannot be empty
		document.getElementById('inputAgeRequired').style.display = "block";
		hasError = true;
	}else if(isNaN(age)){
		//error age cannot be text or symbol (only number)
		document.getElementById('inputAgeInvalid').style.display = "block";
		hasError = true;
	}

	var phoneNumber = document.getElementById('inputPhoneNumber').value;
	if(phoneNumber === ""){
		document.getElementById('inputPhoneNumberRequired').style.display = "block";
		hasError = true;
	}else{
		var phreg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
		
		if(!phreg.test(phoneNumber) || phoneNumber.length>15){
			document.getElementById('inputPhoneNumberInvalid').style.display = "block";
			hasError = true;
			}
	}
	//if we have error modal show's failed else show success
	if (hasError) {
		$('#errorLabelsModal').modal('show');
		return false;
	}
	else {
		alert('Success');
  		document.getElementById('contact-form').submit();
	}

}