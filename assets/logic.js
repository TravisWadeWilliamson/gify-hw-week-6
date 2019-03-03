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


//Adding click even listener
$('button').on('click', function () {

    //Grabbing and storing the data-animal property from the button
    var animal = $(this).attr('data-animal');

    // Create variable to  grab the data from the API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Creating AJAX call for the GIF theme button being clicked and log the response
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Storing the data from the AJAX request in a results variable
        var results = response.data
        console.log(results);

        // // Loops through the AJAX response
        results.forEach(result => {

            //Create and store a div tag
            var animalDiv = $('<div>');

            //Create the paragraph tag with the rating of the GIF.
            var rating = $(`<p>`).text(`Rated: ${result.rating}`);
            
            //Create and store an image tag
            var animalImage = $(`<img>`);

            //Setting the src attribute of the image to a property pulled off the result item

            animalImage.attr("src", result.images.fixed_height.url);

            //Append the p tag and image tag to the animalDiv element
            animalDiv.append(rating);
            animalDiv.append(animalImage);

            //Prepending the animalDiv to the html page in the #gifs-go-here div
            $(`#gifs-go-here`).prepend(animalDiv);
            
        });
    });
})
        

// // Creating variable to store data from the AJAX request
// var ajaxGifResults = response.data;

// // Creating a loop to cycle through each result item
// for (var i = 0; i < ajaxGifResults.length; i++) {

//     // Creating a div to hold the GIF 
//     var gifDiv = $("<div class='gif'>")

//     // Creating a p tag with the result item's rating
//     var ratingP = $("<p>").text(`Rated: ${ajaxGifResults[i].rating}`);

//     // Displaying the rating
//     gifDiv.append(ratingP);

//     // Retrieving the URL for the image
//     var gifURL = ajaxGifResults[i].images.fixed_height.url;

//     // Creating an element to hold the image
//     var gifImage = $("<img>").attr("src", gifURL);

//     // Appending the rating and image tag to the animalDiv
//     gifDiv.append(ratingP);
//     gifDiv.append(gifImage);

//     // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//     $("#gifs-go-here").prepend(gifDiv);

// };

// // Function for displaying movie data
// function renderButtons() {

//     // Deleting the movie buttons prior to adding new movie buttons
//     // (this is necessary otherwise we will have repeat buttons)
//     $("#buttons-view").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < preSelectedGif.length; i++) {

//         // Then dynamicaly generating buttons for each movie in the array.
//         // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
//         var a = $("<button>");
//         // Adding a class
//         a.addClass("gifButton");
//         // Adding a data-attribute with a value of the movie at index i
//         a.attr("data-name", preSelectedGif[i]);
//         // Providing the button's text with a value of the movie at index i
//         a.text(preSelectedGif[i]);
//         // Adding the button to the HTML
//         $("#buttons-view").append(a);
//     }
// }
// // This function handles events where one button is clicked
// $("#add-button").on("click", function (event) {
//     // event.preventDefault() prevents the form from trying to submit itself.
//     // We're using a form so that the user can hit enter instead of clicking the button if they want
//     event.preventDefault();

//     // This line will grab the text from the input box
//     var preSelectedGif = $("#movie-input").val().trim();
//     // The movie from the textbox is then added to our array
//     movies.push(movie);

//     // calling renderButtons which handles the processing of our movie array
//     renderButtons();
// });

// // Calling the renderButtons function at least once to display the initial list of movies
// renderButtons();






