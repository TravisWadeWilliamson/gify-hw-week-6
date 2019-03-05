/**********************************************
 * What? A GIF site. Does? Neat stuff. 
 * The user will be able to click on pre-selected themes to pull some GIFs from our API. 
 * If she clicks the same button again, more GIFs will prepend to the screen.
 * User should be able to search for her own GIFs.
 * User should be able to click on GIFs to animate and stop
 * All buttons should be generated dynamically.
 * 
 * To-do:
 * create link to API (DONE)
 * create function to pull the info (DONE)
 * Create an array of GIF themes for buttons (DONE)
 * on click display 10 pics (DONE)
 * on second click prepend 10 more (DONE)
 * click on GIF to stop or animate (DONE)
 * create input box for user to add search button for her own GIF theme (DONE)
 * create a clear button to reset back to default (NOPE)
 */
//Create an array to hold some preselcted GIF theme buttons
var gifButtons = ["Cute", "Love", "Dumb People", "Kitties", "Puppies"]


    //Creating a function to display buttons from the array
    function renderButtons() {

        //Deleting the GIF buttons prior to adding new GIF buttons. 
        //If we don't do this the form will resubmit itself and double up the buttons
        $('#generated-buttons').empty();

        //Loop through the array of GIF themes
        for (var i = 0; i < gifButtons.length; i++) {
            console.log(gifButtons.length);


            //Dynamically creating some buttons for each GIF theme in the array
            var a = $('<button>');

            //Adding an attribute
            a.attr('data-name', gifButtons[i]);

            //Provide the buttons' text
            a.text(gifButtons[i]);

            //Adding the buttons into the button div
            $('#generated-buttons').append(a);
        }
    }

    //Creating a function to render buttons after user searches gif

    $('#add-gif-button').on('click',
        function (event) {

            // Prevent the form from submitting itself
            event.preventDefault();

            // Grab the text from the input box and trims off any white space at front and end
            var newGifButtons = $('#new-gif-input').val().trim();

            // The gif from the textbox is then added to our array
            gifButtons.push(newGifButtons);

            // calling renderButtons which handles the processing of our array
            renderButtons();

        });

    //Calling renderButtons at least once to display the buttons  
    renderButtons();


    //Adding click even listener
$('button').on('click', function () {
    //Grabbing and storing the data-animal property from the button
    var gifButtons = $(this).attr('data-name');

    // Create variable to  grab the data from the API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifButtons + "&api_key=dc6zaTOxFJmzC&limit=10";

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
            var gifDiv = $('<div>');

            //Create the paragraph tag with the rating of the GIF.
            var rating = $(`<p>`).text(`Rated: ${result.rating}`);

            //Create and store an image tag
            var giphy = $(`<img>`);

            //Setting the src attribute of the image to a property pulled off the result item in order to animate and freeze
            giphy.attr({ src: result.images.fixed_height_still.url, 'data-still': result.images.fixed_height_still.url, 'data-animate': result.images.fixed_height.url });

            //Add class to giphy
            giphy.addClass("giphy");


            //Append the p tag and image tag to the gifDiv element
            gifDiv.append(rating);
            gifDiv.append(giphy);

            //Prepending the gifDiv to the html page in the #gifs-go-here div
            $(`#gifs-go-here`).prepend(gifDiv);

            //Create a function to freeze and reanimate the GIFs (Re-Animator; great 80s B-movie.)
            $(".giphy").on("click", function () {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(giphy).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                    $(giphy).attr("src", $(giphy).attr("data-animate"));
                    $(giphy).attr("data-state", "animate");
                } else {
                    $(giphy).attr("src", $(giphy).attr("data-still"));
                    $(giphy).attr("data-state", "still");
                }
            });

        });
    });
})

