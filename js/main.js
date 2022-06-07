const menuBtn = document.querySelector('.menu_bar');
const NavBar = document.querySelector('.nav_list');
const Navsticky = document.querySelector('.navBar')
menuBtn.onclick = ()=>{
    menuBtn.classList.toggle("active");
	NavBar.classList.toggle("active");

}

window.onscroll = ()=>{
    this.scrollY > 10 ? Navsticky.classList.add("fixed") : Navsticky.classList.remove("sticky");
  }


  //swiper js
  var swiper = new Swiper(".mySwiper", {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

   loop: true,

  });


  //--------------------------scroll reavel--------------------

  let sr =   ScrollReveal({
    duration: 2500,
    distance: "60px",
  });

  sr.reveal(".ab_img",{ delay: 600});
  sr.reveal(".ab_info",{ origin:"top", delay: 700});
  sr.reveal(".portfolio",{ origin:"bottom", delay: 700});


//-----------------------portfolio

    
  $(document).ready(function(){
  
      $(".filter-button").click(function(){
          var value = $(this).attr('data-filter');
          
          if(value == "all")
          {
              //$('.filter').removeClass('hidden');
              $('.filter').show('1000');
          }
          else
          {
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
              $(".filter").not('.'+value).hide('3000');
              $('.filter').filter('.'+value).show('3000');
              
          }
      });
      
    if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  });



  //----------------------------testimonial----------------------

  var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  loop: true,

  });
  
  
  
// darkmode
var toggleSwitch = document.querySelector(".toggle-button");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    /*If required*/
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    /*If required*/
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

