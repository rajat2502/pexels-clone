
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
      $("#13").attr("src",data.hits[0].webformatURL);
      $("#14").attr("src",data.hits[1].webformatURL);
      $("#15").attr("src",data.hits[3].webformatURL);
      $("#16").attr("src",data.hits[4].webformatURL);
      $("#17").attr("src",data.hits[5].webformatURL);
      $("#18").attr("src",data.hits[6].webformatURL);
      $("#19").attr("src",data.hits[7].webformatURL);
      $("#20").attr("src",data.hits[8].webformatURL);
      $("#21").attr("src",data.hits[9].webformatURL);
      $("#22").attr("src",data.hits[10].webformatURL);
      $("#23").attr("src",data.hits[11].webformatURL);
      $("#24").attr("src",data.hits[12].webformatURL);
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

$(document).ready(function(){

  //modal-boxes
  $('#1').click(function(){
    document.getElementsByClassName('modal-box')[0].style.display = "block";
  });
  document.querySelectorAll(".close-box")[0].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[0].style.display = "none";
  });

  $('#2').click(function(){
    document.getElementsByClassName('modal-box')[1].style.display = "block";
  });
  document.querySelectorAll(".close-box")[1].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[1].style.display = "none";
  });

  $('#3').click(function(){
    document.getElementsByClassName('modal-box')[2].style.display = "block";
  });
  document.querySelectorAll(".close-box")[2].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[2].style.display = "none";
  });

  $('#4').click(function(){
    document.getElementsByClassName('modal-box')[3].style.display = "block";
  });
  document.querySelectorAll(".close-box")[3].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[3].style.display = "none";
  });

  $('#5').click(function(){
    document.getElementsByClassName('modal-box')[4].style.display = "block";
  });
  document.querySelectorAll(".close-box")[4].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[4].style.display = "none";
  });

  $('#6').click(function(){
    document.getElementsByClassName('modal-box')[5].style.display = "block";
  });
  document.querySelectorAll(".close-box")[5].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[5].style.display = "none";
  });

  $('#7').click(function(){
    document.getElementsByClassName('modal-box')[6].style.display = "block";
  });
  document.querySelectorAll(".close-box")[6].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[6].style.display = "none";
  });

  $('#8').click(function(){
    document.getElementsByClassName('modal-box')[7].style.display = "block";
  });
  document.querySelectorAll(".close-box")[7].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[7].style.display = "none";
  });

  $('#9').click(function(){
    document.getElementsByClassName('modal-box')[8].style.display = "block";
  });
  document.querySelectorAll(".close-box")[8].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[8].style.display = "none";
  });

  $('#10').click(function(){
    document.getElementsByClassName('modal-box')[9].style.display = "block";
  });
  document.querySelectorAll(".close-box")[9].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[9].style.display = "none";
  });

  $('#11').click(function(){
    document.getElementsByClassName('modal-box')[10].style.display = "block";
  });
  document.querySelectorAll(".close-box")[10].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[10].style.display = "none";
  });

  $('#12').click(function(){
    document.getElementsByClassName('modal-box')[11].style.display = "block";
  });
  document.querySelectorAll(".close-box")[11].addEventListener("click", function(){
    document.querySelectorAll('.modal-box')[11].style.display = "none";
  });

});


