var total = 10;    
var isFirst = true;    
var card1 = "";    
var card2 = "";    
var array_cards = [];    


for(i=1; i <= total/2; i++) {
  array_cards.push(i,i);
}

array_cards.sort(function() {
  return Math.random() - Math.random();
});

for(i=0; i < total; i++) {
  $("#card").append("<li></li>");  
}

$("#card li").on("click",function(){
  
  if(isFirst){
    $("#card li").text("");
  }
  
  var index = $(this).index();
  
  
  $(this).text(array_cards[index]);
    
  if(isFirst){

    card1 = index;
    isFirst = false;
  }else{
    
    card2 = index;

    if(array_cards[card1] === array_cards[card2]){
      $("#card li").eq(card1).css("background-color","red");
      $("#card li").eq(card2).css("background-color","red");
    }
    isFirst = true;    
  }  
});