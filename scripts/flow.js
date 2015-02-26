function show_part_company() {
    var part = 'company/';
    load_part_bg(part + 'bg', 'inner_bgimg');
    load_part(part + 'text', 'fixContainer');
    set_height(2700);
    start_roundabout_partner();
    start_y2b_slider();
    start_lead_slider();
}

function show_part_alumni() {
    show_part('alumni', 1000);
}

function show_part_welcome() {
    load_part_bg('welcome_bg', 'inner_bgimg');
    load_part('welcome_text', 'fixContainer');
    set_height(800);

    var myVar = setInterval(function () {
        $$('prepare_part').innerHTML = "<img src='images/student_bg.jpg' height='0px' width='0px' />";
        clearInterval(myVar);
        }, 5000);
        
}

function show_part(part, height) {
    //hide_events_bar();
    load_part_bg(part + '_bg', 'inner_bgimg');
    load_part(part + '_text', 'fixContainer');
    set_height(height);
}

function show_events_bar() {
    $('#events_bar').css('display', 'block');
}
function hide_events_bar() {
    $('#events_bar').css('display', 'none');
}


function set_height(height) {
    $('body').css('height', (height + 200) + 'px');
    $('.bgimg').css('height', height + 'px');
}

function load_part(part, id) {
    var xmlhttp = create_http();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            
            var myVar = setInterval(function () {
                $$(id).innerHTML = xmlhttp.responseText;
                $("#" + id).fadeIn(500);
                clearInterval(myVar);
            }, 500); //}, 1500);
            
        }
        else if (xmlhttp.readyState < 4) {
            document.getElementById(id).innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br /><p width='100%' align='center'><img width='500px' src='images/loader.gif' /></p>";
        }
        else {
            //document.getElementById(id).innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br /><p width='100%' align='center'><img width='500px' src='images/warning.png' /></p>";
        }
    }
    xmlhttp.open("GET", "parts/" + part + ".html", true);
    $("#" + id).fadeOut(500); //$("#" + id).fadeOut(2000);
    xmlhttp.send();
}

function load_part_bg(part, id) {
    var xmlhttp = create_http();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            var myVar = setInterval(function () {
                $$(id).innerHTML = xmlhttp.responseText;
                $("#" + id).fadeIn(1000);
                clearInterval(myVar);
            }, 900);

        }
        else if (xmlhttp.readyState < 4) {
            //document.getElementById(id).innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br /><p width='100%' align='center'><img width='300px' src='images/loader.gif' /></p>";
        }
        else {
            document.getElementById(id).innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br /><p width='100%' align='center'><img width='500px' src='images/warning.png' /></p>";
        }
    }
    xmlhttp.open("GET", "parts/" + part + ".html", true);
    $("#" + id).fadeOut(1000);
    xmlhttp.send();
}

function send_register_request(program) {
    var xmlhttp = create_http();
    var params = "";
    if (program == 'ga') {
        // title
        params += "entry.1460769177=" + $$('join_form_field_title').value;
        // name
        params += "&entry.538117374=" + $$('join_form_field_name').value;
        // phone
        params += "&entry.1023175387=" + $$('join_form_field_phone').value;
        // email
        params += "&entry.1270143877=" + $$('join_form_field_email').value;
        // university
        params += "&entry.1141292400=" + $$('join_form_field_university').value;
        // university other
        params += "&entry.493557309=" + $$('join_form_field_university_input').value;
        // course
        params += "&entry.1995515099=" + $$('join_form_field_course').value;
        // year of study
        params += "&entry.1179901162=" + $$('join_form_field_yearofstudy').value;
        // source
        params += "&entry.1165389572=" + $$('join_form2_field_source').value;
        // contact method
        params += "&entry.1104906559=" + $$('join_form2_field_contactmethod').value;
    } else if (program == 'gip') {
        // title
        params += "entry.1460769177=" + $$('join_form_field_title').value;
        // name
        params += "&entry.538117374=" + $$('join_form_field_name').value;
        // phone
        params += "&entry.1023175387=" + $$('join_form_field_phone').value;
        // email
        params += "&entry.1270143877=" + $$('join_form_field_email').value;
        // university
        params += "&entry.1141292400=" + $$('join_form_field_university').value;
        // university other
        params += "&entry.493557309=" + $$('join_form_field_university_input').value;
        // course
        params += "&entry.1995515099=" + $$('join_form_field_course').value;
        // year of study
        params += "&entry.1179901162=" + $$('join_form_field_yearofstudy').value;
        // source
        params += "&entry.1165389572=" + $$('join_form2_field_source').value;
        // contact method
        params += "&entry.1104906559=" + $$('join_form2_field_contactmethod').value;
    } else if (program == 'tp') {
        // title
        params += "entry.1460769177=" + $$('join_form_field_title').value;
        // name
        params += "&entry.538117374=" + $$('join_form_field_name').value;
        // phone
        params += "&entry.1023175387=" + $$('join_form_field_phone').value;
        // email
        params += "&entry.1270143877=" + $$('join_form_field_email').value;
        // university
        params += "&entry.1141292400=" + $$('join_form_field_university').value;
        // university other
        params += "&entry.493557309=" + $$('join_form_field_university_input').value;
        // course
        params += "&entry.1995515099=" + $$('join_form_field_course').value;
        // year of study
        params += "&entry.1179901162=" + $$('join_form_field_yearofstudy').value;
        // source
        params += "&entry.1165389572=" + $$('join_form2_field_source').value;
        // contact method
        params += "&entry.1104906559=" + $$('join_form2_field_contactmethod').value;
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            document.getElementById(id).innerHTML = body; // xmlhttp.responseText;

        }
        else if (xmlhttp.readyState < 4) {
            document.getElementById(id).innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br /><p width='100px' align='center'><img width='500px' src='images/loader.gif' /></p>";
        }
        else {
            document.getElementById(id).innerHTML = body;
        }
    }
    if (program == 'ga') {
        xmlhttp.open("POST", "https://docs.google.com/forms/d/1dS704-Ms3DOf0iVUsZoQeoEqfDm9oL8-cVRwoE6KNqM/formResponse", true);
    } else if (program == 'gip') {
        xmlhttp.open("POST", "https://docs.google.com/forms/d/1Qo3oATa1zDhDVQVz5tr9I1N0La6x3EqeFmr5b1oIAVM/formResponse", true);
    } else if (program == 'tp') {
        xmlhttp.open("POST", "https://docs.google.com/forms/d/1WNwSbSyANTL8Z_rbg4VyycbYR1uITbVhwP-9gOpTIMY/formResponse", true);
    }
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
}

function validate_interest_form(page) {
    var validate = true;
    var message = '';
    if (page == 1) {
        // Title and Name
        if ($$('join_form_field_title').value == "") {
            message = 'Title';
            validate = false;
        }
        if ($$('join_form_field_name').value == "") {
             if (message != "") {
                 message += ', Name';
             } else {
                 message += 'Name';
             }
            validate = false;
        }
        if ($$('join_form_field_phone').value == "") {
            if (message != "") {
                message += ', Phone number';
            } else {
                message += 'Phone number';
            }
            validate = false;
        }
        if ($$('join_form_field_email').value == "") {
            if (message != "") {
                message += ', Email address';
            } else {
                message += 'Email address';
            }
            validate = false;
        }
        else if (validateEmail($$('join_form_field_email').value) != true) {
            if (message != "") {
                message += ', Valid email address';
            } else {
                message += 'Valid email address';
            }
            validate = false;
        }
        if ($$('join_form_field_university').value == "") {
            if (message != "") {
                message += ', University';
            } else {
                message += 'University';
            }
            validate = false;
        }
        else if ($$('join_form_field_university').value == "Other") {
            if ($$('join_form_field_university_input').value == "") {
                if (message != "") {
                    message += ', University';
                } else {
                    message += 'University';
                }
                validate = false;
            }
        }

        if ($$('join_form_field_course').value == "") {
            if (message != "") {
                message += ', Course';
            } else {
                message += 'Course';
            }
            validate = false;
        }

        if ($$('join_form_field_yearofstudy').value == "") {
            if (message != "") {
                message += ', Year of study';
            } else {
                message += 'Year of study';
            }
            validate = false;
        }
    }
    else if (page == 2) {
        if ($$('join_form2_field_source').value == "") {
            if (message != "") {
                message += ', How did you hear about us';
            } else {
                message += 'How did you hear about us';
            }
            validate = false;
        }
        if ($$('join_form2_field_contactmethod').value == "") {
            if (message != "") {
                message += ', How will you prefer to be contacted';
            } else {
                message += 'How will you prefer to be contacted';
            }
            validate = false;
        }
    }

    if (message != "") {
        alert('These information are necessary:  ' + message);
    }
    return validate;
}


function check_other_selected(select_id,input_id,btn_id, back) {
    e = $$(select_id);
    other_selected = e.options[e.selectedIndex].value == "Other";
    if (other_selected) {
        $('#' + select_id).css('display', 'none');
        $('#' + input_id).css('display', 'block');
        $('#' + btn_id).css('display', 'block');
    }
    if (back) {
        $('#' + input_id).css('display', 'none');
        $('#' + btn_id).css('display', 'none');
        $('#' + select_id).css('display', 'block');
        $$(select_id).value = "";
    }
}

//header Entity List munu back
function showEntity(curThis, entity) {
    if (entity != 'Menu') {
        $('#am_offices_menu_back').fadeIn(2000);
        $('.GlobelMapSelect').hide();
        $$('entity_placeholder').innerHTML = get_committee_profile(entity.toUpperCase());
        $("#entity_placeholder" ).fadeIn(500);
        //load_entity_part(entity, 'entity_placeholder')
        //$('#entity_placeholder').fadeIn('slow');
        $('.MapNaviContent li').removeClass('selected')
        $(curThis).addClass('selected');
    } else {
        $('#am_offices_menu_back').fadeOut('slow');
        $('.GlobelMapSelect').hide();
        $('#Menu').fadeIn('slow');
        $('.MapNaviContent li').removeClass('selected')
        $(curThis).addClass('selected');
    }

}

function load_entity_part(entity, id) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            var myVar = setInterval(function () {
                $$(id).innerHTML =  xmlhttp.responseText;
                $("#" + id).fadeIn(500);
                clearInterval(myVar);
            }, 500);

        }
        else if (xmlhttp.readyState < 4) {
            $$(id).innerHTML = "<br \><br \><br \><br \><img width='300px' src='images/loader.gif' />";
        }
        else {
            document.getElementById(id).innerHTML = "<br /><p width='100%' align='center'><img width='500px' src='images/warning.png' /></p>";
        }
    }
    xmlhttp.open("GET", "entity/" + entity + "_part.html", true);
    $("#" + id).fadeOut(200);
    xmlhttp.send();
}