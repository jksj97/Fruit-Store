var slideIndex = 1;
showSlides(slideIndex);



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
};

// 슬라이드쇼 흐름,넘어가는 거
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";
}

// rolling-notice
rollingBtn();     

function rollingBtn(){

    $("#btn1").delay(2000).animate({top:'-50px'});

    $("#btn2").delay(2000).css({"display":"block","top":"50px"}).animate({top:'-15px'},function(){

        $("#btn2").delay(2000).animate({top:'-50px'});

        $("#btn3").delay(2000).css({"display":"block","top":"50px"}).animate({top:'-15px'},function(){

            $("#ba2").delay(2000).animate({top:'-50px'});

            $("#btn1").delay(2000).css({"display":"block","top":"50px"}).animate({top:'-15px'},rollingBtn);

        });

    });

}
// 탭
 var targetLink = document.querySelectorAll('.tab-menu a');
 var tabContent = document.querySelectorAll('#tab-contant > div');

 for(var i = 0; i < targetLink.length; i++){

   targetLink[i].addEventListener('click', function(e){
     e.preventDefault();
     var orgTarget = e.target.getAttribute('href');
      console.log(orgTarget);

     var tabTarget = orgTarget.replace('#','');

     for(var x = 0; x < tabContent.length ; x++){
       tabContent[x].style.display = 'none';
     }

     document.getElementById(tabTarget).style.display = 'block';

     for( var j = 0; j<targetLink.length; j++){
       targetLink[j].classList.remove('active');
       e.target.classList.add('active');
     }

   });
  
 }



document.getElementById('tabs-1').style.display = 'block';
