
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
      console.log(data.hits[0].webformatURL);
      $("#1").attr("src",data.hits[0].webformatURL);
      $("#2").attr("src",data.hits[1].webformatURL);
      $("#3").attr("src",data.hits[3].webformatURL);
      $("#4").attr("src",data.hits[4].webformatURL);
      $("#5").attr("src",data.hits[5].webformatURL);
      $("#6").attr("src",data.hits[6].webformatURL);
      $("#7").attr("src",data.hits[7].webformatURL);
      $("#8").attr("src",data.hits[8].webformatURL);
      $("#9").attr("src",data.hits[9].webformatURL);
      $("#10").attr("src",data.hits[10].webformatURL);
      $("#11").attr("src",data.hits[11].webformatURL);
      $("#12").attr("src",data.hits[12].webformatURL);
    }
  });
  });
});

$(document).ready(function () {
    $(document).ajaxStart(function () {
        $("#loading").show();
        $(".photos").hide();
    }).ajaxStop(function () {
        setTimeout(function(){
          $("#loading").hide();
          $(".photos").show();
        },5000);
    });
});
