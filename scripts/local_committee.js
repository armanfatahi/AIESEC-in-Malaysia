function template() {
    var xmlhttp = create_http();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            template.lc = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "templates/lc_profile.html", true);
    xmlhttp.send();
}

function committee() {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState >= 4 && xmlhttp.status == 200) {
            committee.info = replace(xmlhttp.responseText,'"','<br />');
        }
    }

    xmlhttp.open("GET", 'https://docs.google.com/spreadsheet/pub?key=0AgirmBMlzf1idElRSEs0eUhYdjNLa3BrZzVhWGVfQ3c&single=true&gid=0&output=csv', true);
    xmlhttp.send();
}

function get_committee_profile(name) {
    committee_info_all = committee.info.split("----\n");
    var length = committee_info_all.length,
    committee_info_list = null;
    for (var i = 0; i < length; i++) {
        committee_info_list = committee_info_all[i].split(",");
        if (committee_info_list[0].replace('/r', '').replace('/n', '') == name) {
            var name = committee_info_list[0];
            var full_name = committee_info_list[1];
            var email = committee_info_list[2];
            var phone = committee_info_list[3];
            var address = committee_info_list[4];

            var results = template.lc.replace("{{name}}", name.toLowerCase());
            results = replace(results,"{{full_name}}", full_name);
            results = results.replace("{{email}}", email);
            results = results.replace("{{phone}}", phone);
            results = results.replace("{{address}}", replace(address,";",",<br />"));
            //alert(results);
            return results;
        }  
    }
}



