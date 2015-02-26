

// Request form Validation
function company_validate_form() {
    var validate = true;
    var message = '';
    // Title and Name
    if ($$('name').value == "") {
        message = 'Name';
        validate = false;
    }
    if ($$('company_name').value == "") {
        if (message != "") {
            message += ', Company';
        } else {
            message += 'Company';
        }
        validate = false;
    }
    if ($$('company_contact').value == "") {
        if (message != "") {
            message += ', Contact No.';
        } else {
            message += 'Contact No.';
        }
        validate = false;
    }
    if ($$('company_email').value == "") {
        if (message != "") {
            message += ', Email address';
        } else {
            message += 'Email address';
        }
        validate = false;
    }
    else if (validateEmail($$('company_email').value) != true) {
        if (message != "") {
            message += ', Valid email address';
        } else {
            message += 'Valid email address';
        }
        validate = false;
    }
    if (message != "") {
        alert('These information are riquired:  ' + message);
    }
    return validate;
}

function company_send_request() {
    if (company_validate_form()) {

        var name = $$('name').value;
        var company_name = $$('company_name').value;
        var company_contact = $$('company_contact').value;
        var mobile_no = $$('mobile_no').value;
        var company_email = $$('company_email').value;
        var find = $$('find').value;
        var question = $$('question').value;

        var result = "";
        result += "<table><tr><td>Name</td><td>" + name + "</td></tr>";
        result += "<tr><td>Company</td><td>" + company_name + "</td></tr>";
        result += "<tr><td>Contact No.</td><td>" + company_contact + "</td></tr>";
        result += "<tr><td>Mobile</td><td>" + mobile_no + "</td></tr>";
        result += "<tr><td>Email</td><td>" + company_email + "</td></tr>";
        result += "<tr><td>Find out about</td><td>" + find + "</td></tr>";
        result += "<tr><td>Question</td><td>" + question + "</td></tr></table>";

        var xmlhttp;
        var params = "body=" + result ;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("POST", "http://my-aiesec.appspot.com/company", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(params);

        $$('message').innerHTML = "Thank you for your interest!<br>Our Business Development Team will be in touch with you shortly.";
        $$('form_table').innerHTML = "";
    } 
}