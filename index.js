
$(document).ready(function(){

  $(".search").click(function(){

    var title = $(".value").val();
    if(title==''){
    alert("Please Enter Some Value Into The Input Box");
 }


  $.ajax({

    url : "https://pixabay.com/api/?key=12229910-f242d279c47a4d45d1de9b391&q="+title+"&image_type=photo",
    type: "Get",
    datatype :"jsonp",
    success : function(data){
      console.log(data);
      console.log(data.hits[0].largeImageURL);
      $("#1").attr("src",data.hits[0].largeImageURL);
      $("#2").attr("src",data.hits[1].largeImageURL);
      $("#3").attr("src",data.hits[3].largeImageURL);
      $("#4").attr("src",data.hits[4].largeImageURL);
      $("#5").attr("src",data.hits[5].largeImageURL);
      $("#6").attr("src",data.hits[6].largeImageURL);
      $("#7").attr("src",data.hits[7].largeImageURL);
      $("#8").attr("src",data.hits[8].largeImageURL);
      $("#9").attr("src",data.hits[9].largeImageURL);
      $("#10").attr("src",data.hits[10].largeImageURL);
      $("#11").attr("src",data.hits[11].largeImageURL);
      $("#12").attr("src",data.hits[12].largeImageURL);
    }




  });




  });












});
