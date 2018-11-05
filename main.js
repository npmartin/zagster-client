//http://tinyurl.com/cs160nov05

const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#ridecount").html(numberOfRides)
}
//implementing a function - taking action - defining a recipe and giving it a name, you can invoke that recipe////#endregion

//function implementation or definition (above)

//name = identifier
//code block or steps to follow once the function is executed

//get number of rides....make a request to.../rides/count; grab the value of the count attribute
//replace todo with the number of rides