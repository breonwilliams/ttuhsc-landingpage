$(document).ready(function(){

// Get JSON
$.getJSON( "http://vpmdev.com/results.json", function( data ) {
  
  // Bind listener to search input
  $('#program-search').on('keydown keyup keypress',function(){

    var inputVal = document.getElementById('program-search')[0].value,
        inputValLength = inputVal.length;

    // Remove results if empty input
    if( !inputVal || inputVal === "" || inputValLength - 1 === 0 ) {
      $('#program-search-results > div:not(#browse-all)').remove();
      $('#browse-all').hide();
    
    // Otherwise, do all the things
    } else {

      // Display "Browse All Programs"
      $('#program-search-results > div:not(#browse-all)').remove();
      $('#browse-all').show();

     // Get input
      var searchInput = document.getElementById('program-search')[0].value.toLowerCase();

      // Run value against data
      for (var i = 0; i < data.length; i++ ) {

        var programName = data[i].name.toLowerCase(),
            programDept = data[i].department.toLowerCase(),
            programId = programName.replace(/[.,()& ]+/g, '-'),
            programKeywords = data[i].keywords;

        // Loop through keywords
        for (var j = 0; j < programKeywords.length; j++){

          // Find substring in program name, department, or keyword
          if ( ~programName.indexOf( searchInput )
              || ~programDept.indexOf( searchInput )
              || ~programKeywords[j].toLowerCase().indexOf( searchInput ) ) {

              var keywordClass = programKeywords[j].toLowerCase(),
                  prependStr   = '<div id="'+programId+'" class="'+keywordClass+'"><p>' + data[i].name + '</p></div>';

              // Go ahead and prepend it if it matches the program name
              if ($('#'+programId).length < 1 ){
                console.log($("#program-search-results div").length);
                $("#program-search-results").prepend(prependStr);
              }

              // Append result if match
              if ( !$('#' + programId).length ) {
             
                $("#program-search-results").prepend(prependStr);
                
                // Check if it has a class and remove it if it does
                $('#program-search-results > div').each(function(){     
                  if ( $(this).attr('class') && !$(this).hasClass(keywordClass).not('#browse-all') ){
                    $(this).remove();
                  }
                });

              }
              // remove it if it doesn't

            } else {

               if ( $('#'+programId) ) {
                $('#'+programId).remove();
               }

            }

        }
      }
    };
  });
});

});