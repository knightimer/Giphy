
var dcUniverse =["Batman","Superman","Wonder Woman","The Joker","Catwoman"];

$("button").on("click", function() {
    //each click clears previous click results
    // select the gif element
    $("#gifs-appear-here").empty();
    var person = $(this).attr("data-person");""

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {

        var results = response.data;
        // console.log(results)
       
        for (var i = 0; i < results.length; i++) {
          
          var movingLink = results[i].images.fixed_height.url
          var stillLink = results[i].images.fixed_height_still.url
          // console.log(movingLink)
          // console.log(stillLink)

            var gifDiv = $("<div class='item col-sm-3git'>");
            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.addClass("clickMe");

            personImage.attr("src", stillLink);
            personImage.attr('data-state', 'still');
            personImage.attr('data-animated', movingLink);
            personImage.attr('data-still', stillLink);

            gifDiv.append(p);
            gifDiv.append(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });

  $(document).on('click', '.clickMe', function(){
    var state = $(this).attr('data-state');

    if(state === 'still'){
      $(this).attr('data-state', 'animated');
      $(this).attr('src', $(this).attr('data-animated'));
    }else{
      $(this).attr('data-state', 'still');
      $(this).attr('src', $(this).attr('data-still'));
    }
  })


//NEW BUTTON//
//grab the value of the form input
//using jquery select that form

$("#addGif").on("click", function(event) {
  event.preventDefault();
  var formValue = $("#topicInput").val()
  console.log(formValue);
  });
 
 // Create a new element <button>

 //take the variable(formvalue) and change the text of the button

 //render the button on the page//
 
