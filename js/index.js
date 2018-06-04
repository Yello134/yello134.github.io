$("#container").mouseenter(function(){
  $("#container").animate({
    postion: "absolute",     
    marginLeft: "20", 
  }) 
})

$("#container").mouseleave(function(){
  $("#container").animate({
    postion: "absolute",
    marginRight: "20",
  })
})