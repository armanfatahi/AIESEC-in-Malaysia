function student_data() {
    // 1- Load Student Text and BackGround.
    student_data.text = "";
    student_data.bg = "";
    load_part_to_variable("parts/student/text.html", student_data, "text");
    load_part_to_variable("parts/student/bg.html", student_data, "bg");

    //2- load more information
    load_part_to_variable("parts/student/ga_info.html", student_data, "ga_info");
    load_part_to_variable("parts/student/gip_info.html", student_data, "gip_info");
    load_part_to_variable("parts/student/txp_info.html", student_data, "txp_info");

    //3- load interest forms
    load_part_to_variable("parts/student/ga_interest_form.html", student_data, "ga_interest");
    load_part_to_variable("parts/student/gip_interest_form.html", student_data, "gip_interest");
    load_part_to_variable("parts/student/txp_interest_form.html", student_data, "txp_interest");

    //4- load ga sub-products
    load_part_to_variable("parts/student/ga_sub.html", student_data, "ga_sub");
    load_part_to_variable("parts/student/ga_sub_career_development.html", student_data, "ga_sub_career_development");
    load_part_to_variable("parts/student/ga_sub_cultural_understanding.html", student_data, "ga_sub_cultural_understanding");
    load_part_to_variable("parts/student/ga_sub_environment.html", student_data, "ga_sub_environment");
    load_part_to_variable("parts/student/ga_sub_literacy.html", student_data, "ga_sub_literacy");

    //5- load ga projects for each sub-product
    load_ga_projects();

}

function load_ga_projects() {
    var url = "https://docs.google.com/spreadsheet/pub?key=0AgirmBMlzf1idElRSEs0eUhYdjNLa3BrZzVhWGVfQ3c&single=true&gid=2&output=csv";
    load_part_to_variable(url, student_data, "ga_project_sheet");

    project_rows = student_data.ga_project_sheet.split("EndOfRow\n");

    student_data.ga_sub_projects_table = "";
    student_data.ga_sub_career_development_projects_table = create_sub_product_table("career_development", project_rows);
    student_data.ga_sub_cultural_understanding_projects_table = create_sub_product_table("cultural_understanding", project_rows);
    student_data.ga_sub_environment_projects_table = create_sub_product_table("environment", project_rows);
    student_data.ga_sub_literacy_projects_table = create_sub_product_table("literacy", project_rows);
}


function create_sub_product_table(sub, project_rows) {
    if (project_rows == null) {
        student_data();
    }

    var project_sub_product_rows = new Array();
    for (var i = 0; i < project_rows.length; i++) {
        project_row = project_rows[i].split(",");
        if (project_row[0] == sub) {
            project_sub_product_rows.push(project_row)
        }
    }
    var table = "<table class='project_table'>";
    table += "<tr>";
    table += "<td>";
    table += "<table><tr><td style='width: 200px;'> Logo </td>";
    table += "<td style='width: 150px;'> Name </td>";
    table += "<td style='width: 150px;'> Country </td>";
    table += "<td style='width: 150px;'> Duration </td>";
    table += "<td> Description </td></tr></table></td>";
    table += "</tr>";

    for (var i = 0; i < project_sub_product_rows.length; i++) {
        table += "<tr >";
        table += "<td>";
        table += "<table><tr><td style='width: 200px;'>";
        table += "<img src='" + project_sub_product_rows[i][2] + "' />";
        table += "</td>";

        table += "<td style='width: 150px;'>";
        table += project_sub_product_rows[i][3];
        table += "</td>";

        table += "<td style='width: 150px;'>";
        table += project_sub_product_rows[i][1];
        table += "</td>";

        table += "<td style='width: 150px;'>";
        table += project_sub_product_rows[i][4];

        table += "</td><td style='cursor:pointer;' onclick='expand_description_row(\"row" + i + "\")' ><u> Show More Information </u></td></tr></table></td>";

        table += "</tr><tr style='display:none;' id='row" + i + "' class='row_more'><td>";
        table += project_sub_product_rows[i][5];
        table += "</td></tr>";

    }
    table += "</table>";
    return table;
}

function expand_description_row(row_id) {
    last_id = expand_description_row.last_id;
    $('#' + last_id).fadeOut(500);
    $('#' + row_id).fadeIn(500);
    expand_description_row.last_id = row_id;
}

function load_student_sub_part(sub, container) {
    change_html(container, eval("student_data." + sub) + "<br />" + eval("student_data." + sub + "_projects_table"), 500);
    expand_description_row('');
}


function show_info_canvas(section) {
    if (section == "ga") {
        change_html('info_canvas', student_data.ga_info, 500);
        start_roundabout_ga();
    }
    else if (section == "gip")
        change_html('info_canvas', student_data.gip_info, 500);

    else if (section == "txp")
        change_html('info_canvas', student_data.txp_info, 500);
}

function hide_info_canvas() {
    $$('info_canvas').innerHTML = "";
}


function show_interest_form_canvas(section) {
    if (section == "ga") {
        change_html('info_canvas', student_data.ga_interest, 500);
        start_roundabout_ga();
    }
    else if (section == "gip")
        change_html('info_canvas', student_data.gip_interest, 500);

    else if (section == "txp")
        change_html('info_canvas', student_data.txp_interest, 500);
}
function hide_interest_form_canvas() {
    $$('info_canvas').innerHTML = "";
}

function show_part_student() {
    change_html('inner_bgimg', student_data.bg, 1000);
    change_html('fixContainer', student_data.text, 1000);
    set_height(3500);
    student_data();
}

function start_roundabout_ga() {
    var myVar = setInterval(function () {
        clearInterval(myVar);
        $('.ga ul').roundabout();
        clearInterval(myVar);
        $$('ga').style.visibility = 'visible';
        load_student_sub_part('ga_sub', 'sub_product');
    }, 1000);
}
