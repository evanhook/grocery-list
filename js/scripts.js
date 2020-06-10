$(document).ready(function(){
  $("form#groceryList").submit(function(event){
    event.preventDefault();

    const listItems = $("input.form-control").val();
    const inputItems = [listItems];
    inputItems.forEach(function (){
      $("ul#listItems").text(inputItems);

    });
    $("#myList").show();
    
    
    
    
    
   // $("ul#listItems").text(inputItems);
    //$("#myList").show();
  });
});