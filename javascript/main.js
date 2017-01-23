var inputSearchText="";
var imageTitle="";
var $searchInput = $("#searchInput");
var $detachedItem ;
var  detatchedArray =[];

function  fillTheGallery() {
   {
    for( var i =0; i < detatchedArray.length; i++) {
       $detachedItem = detatchedArray[i];                              
       // $detachedItem.css("display", "inline-block");
       $("#gallery #listOfImages").append($detachedItem);
    }
     //empty the array
     detatchedArray.length = 0;
  }
}
//construct light-box
  $('#gallery').rebox({
  selector: 'a',
  prev: '&lt;',
  next: '&gt;',
  speed: 400 
});


//the problem is : we need a search box at 
//to of the page and should filter photos based on the captions.
//the photos should filter in real time as we type and only display photos that match search.

//1- the solution : we need to treat with an event that triggered at the same time we type in search box.

$searchInput.keyup(function() {
    //after each keyup event fill all detached images and recompare them
      fillTheGallery();
    
  inputSearchText = ($searchInput.prop("value")).toLowerCase();
  //2- we need to compare the search inbox value with the captions of the photos
  $("#gallery .image a ").each( function() {   
     imageTitle = ($(this).prop("title")).toLowerCase();
    //3- we need to detach the photos did not match the search text.
      if(imageTitle.search(inputSearchText) === -1)
        {  
          $(this).parent().css("display" ,"none");
          $detachedItem = $(this).parent();  //li        
          detatchedArray.push($detachedItem);
          $(this).parent().detach();        
          
        }
        else {
             $(this).parent().css("display", "inline-block");     
             }
         
       
  });//end of each
});//end of keyup


