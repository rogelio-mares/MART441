let car = {
    "manufacturer" : "Ford",
    "color" : "red",
    "model" : {
        "Type" : "Explorer",
        "Year" : "2019"
    },
    "sizes" : [
        "small",
        "medium",
        "large",
        "x-large"
    ]
}

$(function () {
$("button").click(function () {
    showCarInfo();
});

});

function showCarInfo()
{
    $("#carInformation").html("Manufacturer: " + car.manufacturer 
    + "<br>color:" + car.color + "<br>Tpye:" + car.model.Type + "<br>Year:" 
    + car.model.year + "<br>Sizes Available:<br>" +
    car.sizes[0] + "<br>" + car.sizes[1] + "<br>" + car.sizes[2] + "<br>" + car.sizes[3]);
}