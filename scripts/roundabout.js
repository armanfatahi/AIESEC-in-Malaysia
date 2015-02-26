function start_roundabout_partner() {
    var myVar = setInterval(function () {
        clearInterval(myVar);
        $('#partners ul').roundabout({
            minZ: 100,
            maxZ: 300,
            minOpacity: 1,
            minScale: 0.6,
            childSelector: '.mover',
            tilt: -4
        });
        $$('partners').style.visibility = 'visible';
    }, 2000);
}
