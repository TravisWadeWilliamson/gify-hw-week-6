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

//DisplayGifInfo function will pull the gifs from the giphy.com and then pushes it to the html


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

    // Displaying the rating
    gifDiv.append(ratingP);

    // Retrieving the URL for the image
    var gifURL = ajaxGifResults[i].images.fixed_height.url;

    // Creating an element to hold the image
    var gifImage = $("<img>").attr("src", gifURL);

    // Appending the paragraph and image tag to the animalDiv
    gifDiv.append(ratingP);
    gifDiv.append(gifImage);

    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
    $("#gifs-go-here").prepend(gifDiv);

};

// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < preSelectedGif.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("gifButton");
        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", preSelectedGif[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(preSelectedGif[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}
// This function handles events where one button is clicked
$("#add-button").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var preSelectedGif = $("#movie-input").val().trim();
    // The movie from the textbox is then added to our array
    movies.push(movie);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();






