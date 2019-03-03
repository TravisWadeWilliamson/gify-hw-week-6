// Initial array of GIF themes
var gifThemes = ['Animals', 'Sports', 'Ribald', 'Love'];
// var gifSearch = 'cats'

var gifThemeName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=random?&api_key=dc6zaTOxFJmzC&limit=10";

    //Creating AJAX call to giphy.com for the GIF theme button clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });




// displayGIFInfo function will pull from giphy.com and then push the info into the html
function displayGIFInfo() {
    
    var gifThemeName = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=random?&api_key=dc6zaTOxFJmzC&limit=10";

    //Creating AJAX call to giphy.com for the GIF theme button clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
        //Creating a div to hold the GIFs
        var gifDiv = $("<div class='giphies'>");

        //storing the rating data.
        var rating = response.data.rating;
        
        //Creating an element to have the GIF's rating displayed in a p tag.
        var ratingPTag = $('<p>').text(`Rated: ${rating}`);

        //Displaying the rating by appending it to the GifDiv
        gifDiv.append(ratingPTag);

        //Retrieving the URL for the GIF
        var gifURL = response.data.images.original.url;

        //Creating an element to hold the GIF
        var gifImage = $("<img>").attr("src", gifURL);

        //Appending the GIF
        gifDiv.append(gifImage);

        //Putting the newly selected GIFs at the top of previously selected ones.
        $('#giphies-cache').prepend(gifDiv);   
});
}
// Function for displaying GIF theme buttons
function renderButtons() {

    // Deleting the GIF theme buttons prior to adding new GIF buttons
    // (this is necessary otherwise we will have repeat buttons)
    $('#GIF-buttons').empty();

    // Looping through the array of gifThemes
    for (var i = 0; i < gifThemes.length; i++) {

        // Then dynamically generating buttons for each GIF theme in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var button = $('<button>');

        // Adding a class
        button.addClass('GIF');

        // Adding a data-attribute with a value of the GIF theme at index i
        button.attr('data-name', gifThemes[i]);

        // Providing the button's text with a value of the movie at index i
        button.text(gifThemes[i]);

        // Adding the button to the HTML
        $('#GIF-buttons').append(button);
    }
}

// This function handles events where one button is clicked
$('#add-GIF-button').on('click', function (event) {

    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var userGifInput = $('#GIF-input').val().trim();
    // The GIF from the textbox is then added to our array
    gifThemes.push(userGifInput);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Function for displaying the GIF info
// Adding a click event listener to all elements with the class "GIF"
// Must add the event listener to the document so it will listen for dynamically generated elements
// $(".movies").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".GIF", displayGIFInfo);


// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();

