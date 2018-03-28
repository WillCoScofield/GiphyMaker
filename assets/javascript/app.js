$(document).ready(function () {




    //enter animal into text box and upon submit add a new button to the array of buttons in the gif-button-space
    var animalButArray = [];



    $("#submit-btn").on("click", function (event) {
        event.preventDefault();

        var animalBut = $("<button>");
        var animalName = $("#inputAnimal").val().trim();
        animalBut.addClass("data-anName");
        animalBut.addClass("btn btn-primary gif-but");
        animalBut.attr("data-anName", animalName)
        animalBut.text(animalName);
        $(".gif-buttons-space").append(animalBut);
        console.log(animalName);

    })





    //on click of animal button generate gif response from giphy AJAX request

    $("body").on("click", ".gif-but ", displayGifContent)



    function displayGifContent() {
        console.log(this);
        var thisAnimal = $(this).attr("data-anName");

        var apiKey = "n9k0CCE8Ac6bgJsy7bogN8CPNgbJ2wpW";

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + thisAnimal + "&api_key=" + apiKey + "&limit=10";

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //create divs for gifs and ratings
            var gifDivs = $("<div class = 'gifDivs'>")

            $(".gifsHere").prepend(gifDivs)

            response.data.forEach(function (gifData) {
                console.log(gifData);

                //create gif rating h3 tag and append to my div space

                var rating = gifData.rating;
                //create gif img tag, store and append to it's rating
                var gifURL = gifData.images.fixed_width.url;

                var gifImage = $("<img>").attr("src", gifURL)
           

                var gifRating = $("<p>").text("Rating: " + rating)

                // $("#gifs")
                gifDivs.append(gifRating)
                gifRating.append(gifImage);



                // console.log(response);

            });



        })

    }

});