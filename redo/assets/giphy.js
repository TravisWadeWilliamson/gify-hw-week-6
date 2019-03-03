// Initial array of GIF themes
var gifThemes = ['Animals', 'Sports', 'Ribald', 'Love'];

// Function for displaying GIF theme buttons
function renderButtons() {

    // Deleting the GIF theme buttons prior to adding new GIF buttons
    // (this is necessary otherwise we will have repeat buttons)
    $('#GIFs-view').empty();

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
        $('#GIFs-view').append(button);
    }
}

// This function handles events where one button is clicked
$('#add-GIF').on('click', function (event) {

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

// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();

