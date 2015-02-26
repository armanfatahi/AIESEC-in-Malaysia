// to load menus
function menus() {
    load_part_to_variable("parts/menu/about_us.html", menus, "about_us");
    load_part_to_variable("parts/menu/contact_us.html", menus, "contact_us");
    load_part_to_variable("parts/menu/history.html", menus, "history");
    load_part_to_variable("parts/menu/network.html", menus, "network");
    load_part_to_variable("parts/menu/numbers.html", menus, "numbers");
    load_part_to_variable("parts/menu/stories.html", menus, "stories");
}

function show_sub_menu(part) {
    set_height(600);
    change_html('fixContainer', eval("menus." + part), 600);
}