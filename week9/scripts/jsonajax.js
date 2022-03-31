$(document).ready(function () {
    $("button").click(function () {
        $("#carInformation").load("data/car.json", function(responseText){
            var car = JSON.parse(responseText);
            $("#carInformation").html("Manufacturer: " + car.manufacturer 
        + "<br>Color:" + car.color + "<br>Type:" + car.model.type + "<br>Year:" 
        + car.model.year + "<br>Sizes Available:<br>" +
        car.sizes[0] + "<br>" + car.sizes[1] + "<br>" + car.sizes[2] + "<br>" + car.sizes[3]);
        });
    });
});
