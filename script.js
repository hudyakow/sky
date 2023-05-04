/*$('.menu').click(function() {
    $('.third').toggle(); 
});*/
$('.menu').click(function() {
    $('.third').toggleClass('third-1'); 
    $('.third').toggleClass('third-2'); 
});

var cardIndex = 1;
function NewsRotator() {
  $(".card").css("visibility", "hidden");
  $(".card" + cardIndex).css("visibility", "visible");
  
  var cardCount = 4;
  cardIndex++;
  if(cardIndex > cardCount) {
    cardIndex = 1;
  }
}

$(document).ready(function() {
  NewsRotator();
  setInterval(NewsRotator, 3500);
});

/**/$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX + -80 + 'px',
        top: e.pageY + -80 + 'px'
      });
    })
  });
  
$(".main").hover(function () {
    $('#circularcursor').css("visibility", "hidden");
}, 
function () {
    $('#circularcursor').css("visibility", "visible");
});


/*window.addEventListener('scroll', function () {
    const scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition);
});*/
/**/

var images = [
    "http://media-cache-ak0.pinimg.com/736x/5d/d8/41/5dd8416cbae27edeac61aa525a5df99d.jpg",
    "https://sun9-12.userapi.com/impf/c840528/v840528961/6d778/mC56jF7rgAY.jpg?size=1200x1200&quality=96&sign=1673c94c3c5aed3b564dbd0a0a303863&c_uniq_tag=JJfhHuzIpn5bjaEr6tFK7ey41Zm0cNwe8wU5x0-Z3zw&type=album",
    "https://avatars.mds.yandex.net/i?id=0a3430a6e786d9aebfec410a1d090f91_l-4937827-images-thumbs&n=13",
    "https://mir-s3-cdn-cf.behance.net/projects/max_808/000aab60465387.Y3JvcCwxMjIyLDk1Niw5MCw0ODM.jpg"
  ];
  
  
  // Let's create graphemescope object inside the container
  var container = $("#container");
  var scope = new Graphemescope( container[0] );
  
  
  var index = 0;
  function changePicture() {
      scope.setImage(images[index]);  
      index = (index + 1) % images.length;
  };
  
  setInterval(changePicture, 3500);
  changePicture();
  
  $(window).mousemove(function(event) {
    var factorx = event.pageX / $(window).width();
    var factory = event.pageY / $(window).height()
    
    // This will move kaleidoscope
    scope.angleTarget = factorx;
    scope.zoomTarget  = 1.0 + 0.5 * factory;
  });
  
  
  var resizeHandler = function() {
    container.height( $(window).height() );
    container.width( $(window).width() );
  };
  
  $(window).resize(resizeHandler);
  $(window).resize();
  
 /* container.click(changePicture);*/
/**/

/*const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;
  
function fixedNav() {
  if (window.scrollY > navTop) {    
    nav.classList.add('line');
  } else {
    nav.classList.remove('line');      
  }
}
  
window.addEventListener('scroll', fixedNav);*/
let text = document.getElementById('myText').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

/*document.getElementById('button').onclick = function() {
    alert("button was clicked");
}*/

$('#btn').click(function() {
    $("#copied ").css("display", "block");
    $("#btn ").css("display", "none");

    setTimeout(function(){
      $("#copied").css("display", "none");
      $("#btn").css("display", "block");
    }, 500);
});

$('#k1 a:nth-child(2)').click(function() {
  $("#k1").css("visibility", "hidden");
  $("#k2").css("visibility", "visible");
});

$('#k2 a:nth-child(3)').click(function() {
  $("#k3").css("visibility", "visible");
  $("#k2").css("visibility", "hidden");
});

$('#k2 a:nth-child(1)').click(function() {
  $("#k2").css("visibility", "hidden");
  $("#k1").css("visibility", "visible");
});

$('#k2 a:nth-child(4)').click(function() {
  $("#k3").css("visibility", "hidden");
  $("#k4").css("visibility", "visible");
});

$('#k3 a:nth-child(4)').click(function() {
  $("#k4").css("visibility", "visible");
  $("#k3").css("visibility", "hidden");
});

$('#k3 a:nth-child(2)').click(function() {
  $("#k2").css("visibility", "visible");
  $("#k3").css("visibility", "hidden");
});

$('#k3 a:nth-child(1)').click(function() {
  $("#k1").css("visibility", "visible");
  $("#k3").css("visibility", "hidden");
});

$('#k1 a:nth-child(3)').click(function() {
  $("#k2").css("visibility", "hidden");
  $("#k3").css("visibility", "visible");
});

$('#k1 a:nth-child(4)').click(function() {
  $("#k3").css("visibility", "hidden");
  $("#k4").css("visibility", "visible");
});

$('#k4 a:nth-child(1)').click(function() {
  $("#k1").css("visibility", "visible");
  $("#k2").css("visibility", "hidden");
  $("#k4").css("visibility", "hidden");
});

$('#k4 a:nth-child(2)').click(function() {
  $("#k2").css("visibility", "visible");
  $("#k4").css("visibility", "hidden");
});

$('#k4 a:nth-child(3)').click(function() {
  $("#k3").css("visibility", "visible");
  $("#k4").css("visibility", "hidden");
});

$('.mobile').click(function() {
  $(".one").addClass("hide__menu");
  $(".hide__menu, .menu, .works, .about, .skills, .links, .cross").css("display", "block");
  $("#bg-wrap, .logo, .h, .mobile").css("display", "none");
});

$('.cross').click(function() {
  $(".one").removeClass("hide__menu");
/*  $(".one").addClass("visible__menu");*/
  $(".hide__menu, .menu, .works, .about, .skills, .links, .cross").css("display", "none");
  $("#bg-wrap, .logo, .h, .mobile").css("display", "block");
});

/*gsap.fromTo(".works", {x: -2000, duration: 1}, {x: 0, duration: 1});*/

/*gsap.to(".works", {x: 2000, duration: 5});*/