function load_js(filename) {

    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute("src", filename);
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function load_css(filename) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function $$(id) {
    return document.getElementById(id);
}
function loader_init() {
    loader_set.value = 0;
    loader.student = "";
    loader.company = "";
}
function loader_set(value) {
    loader_set.value = value;
    $$('lpt').style.width = value.toString() + "%";
}
function loader_add(value) {
    for (var i = 0; i < value; i++) {
        loader_set.value = loader_set.value + 1;
        $$('lpt').style.width = loader_set.value.toString() + "%";
    }
}
function loader_clear() {
    $$('loader_canvas').innerHTML = "";
    $$('loader_canvas').style.display = "none";
}

function loader() {

}