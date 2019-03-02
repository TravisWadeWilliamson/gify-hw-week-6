/**********************************************
 * What? A GIF site. Does? Neat stuff. 
 * The user will be able to click on pre-selected themes to pull some GIFs from our API. 
 * If she clicks the same button again, more GIFs will prepend to the screen.
 * User should be able to search for her own GIFs.
 * User should be able to click on GIFs to animate and stop
 * 
 * To-do:
 * create link to API
 * create function to pull the info
 * Create an array of GIF themes for buttons
 * on click display 10 pics
 * on second click prepend 10 more
 * click on GIF to stop or animate
 * create input box for user to add search button for her own GIF theme
 * create a clear button to reset back to default
 */


//Array of Pre-selected GIF themes
var preSelectedGif = ['Pets', 'Ribald',];
var gifSearch = 'cats'
// DisplayGifInfo function will pull the gifs from the giphy.com and then pushes it to the html
// function displayGifInf() {

    // Create variable for storing the pre-selected themes from the API
    var gifTheme = $(this).attr("data-gif");
    // Create variable to  grab the data from the API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Creating AJAX call for the GIF theme button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

    // Creating variable to store data from the AJAX request
    var ajaxGifResults = response.data;

    // Creating a loop to cycle through each result item
    for (var i = 0; i < ajaxGifResults.length; i++) {

        // Creating a div to hold the GIF 
        var gifDiv = $("<div class='gif'>")

        // Creating a p tag with the result item's rating
        var ratingP = $("<p>").text(`Rated: ${ajaxGifResults[i].rating}`);

       




    }

// }