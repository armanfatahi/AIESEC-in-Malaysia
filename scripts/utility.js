// instanciate HTTP request
function create_http() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

function replace(string, search, replacement) {
    return string.split(search).join(replacement);
}


function load_sub_part(sub, container) {
    var xmlhttp = create_http();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            $$(container).innerHTML = xmlhttp.responseText;
        }
    }
    $$(container).innerHTML = "<p width='100%' align='center'><img width='200px' src='images/loader.gif' /></p>";
    xmlhttp.open("GET", "parts/" + sub + ".html", true);
    xmlhttp.send();
}

// loads a part to a given variable
function load_part_to_variable(path, func, variable) {
    var xmlhttp = create_http();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            eval("func."+variable+" = xmlhttp.responseText;");
        }
    }
    xmlhttp.open("GET", path , true);
    xmlhttp.send();
}

// Change the HTML content of an Element
function change_html(id, content, delay) {
    $("#" + id).fadeOut(delay);

    var myVar = setInterval(function () {
        clearInterval(myVar);
        $$(id).innerHTML = content;
        $("#" + id).fadeIn(delay);
    }, delay);


}


function $$(id) {
    return document.getElementById(id);
}

function hide_element(id) {
    $("#" + id).fadeOut(500);
}

function show_element(id) {
    var myVar = setInterval(function () {
        $("#" + id).fadeIn(1000);
        clearInterval(myVar);
    }, 500);

}

function validateEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        return false;
    }
    else {
        return true;
    }
}