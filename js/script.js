//Animations init
new WOW().init(); 

function validateForm() {
    var name =  document.getElementById('form-contact-name').value;
    if (name == "") {
        $('#danger-modal-message').text("Name cannot be empty");
        $('#danger-modal').modal();
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('form-contact-email').value;
    if (email == "") {
        $('#danger-modal-message').text("Email cannot be empty");
        $('#danger-modal').modal();
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            $('#danger-modal-message').text("Email format invalid");
            $('#danger-modal').modal();
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('form-contact-subject').value;
    if (subject == "") {
        $('#danger-modal-message').text("Subject cannot be empty");
        $('#danger-modal').modal();
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('form-contact-message').value;
    if (message == "") {
        $('#danger-modal-message').text("Message cannot be empty");
        $('#danger-modal').modal();
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }

	document.getElementById('status').innerHTML = "Sending...";
	var formData = {
	    name: $('input[name=name]').val(),
	    email: $('input[name=email]').val(),
	    subject: $('input[name=subject]').val(),
	    message: $('textarea[name=message]').val()
	};

	$.ajax({
        type: "POST",
        url: "mail.php/",
    	data: formData,
    	success: function(data, textStatus, jqXHR)
    	{
    	    $('#status').text(textStatus);
    	    if (data.code){ //If mail was sent successfully, reset the form.
                $('#contact-form').closest('form').find("input[type=text], textarea").val("");
                $('#success-modal-message').text(data.message);
                $('#success-modal').modal();
            }
            else{
                $('#danger-modal-message').text(data.message);
                $('#danger-modal').modal();
            }
    	},
    	error: function (jqXHR, textStatus, errorThrown)
    	{  
            $('#danger-modal-message').text(textStatus);
            $('#danger-modal').modal();
    	    $('#status').text(jqXHR.status+" "+textStatus);
    	}
	});
}

// Info Modal cookie
$(function() {
    function GetCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i=0;

        while (i < clen) {
            var j = i + alen;
                if (document.cookie.substring(i,j) == arg) return "here";
                i = document.cookie.indexOf(" ", i) + 1;
                if (i == 0) break;
        }

        return null;
    }
    var visit = GetCookie("COOKIE");
    if (visit == null) $('#siteInfoModal').modal('show');

    var expire = new Date();
    expire = new Date(expire.getTime()+7776000000);
    document.cookie = "COOKIE=here; expires=" + expire;
});