var clicknavber = document.querySelector('.clicknavber');
var iconbar = document.querySelector('.iconbar');
var closber = document.querySelector('.closber');
iconbar.addEventListener('click', () => {
    clicknavber.classList.add('activeclick')

}
);
closber.addEventListener('click', () => {
    clicknavber.classList.remove('activeclick')

}
);

var navbersection = document.querySelector('.navbersection');
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
        navbersection.classList.add('activenav')
        scrollber.classList.add('acctivescroll');
    }
    if (this.window.scrollY < 100) {
        navbersection.classList.remove('activenav')
        scrollber.classList.remove('acctivescroll');


    }
})







$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




//  function sendEmail(){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "parsonal1306417035@gmail.com",
//     Password : "01306417035",
//     To : 'shamimusman515419@gmail.com',
//     From : document.getElementById('email').value,
//     Subject : "New cotact from Enquriy",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
//  }
  






var scrollber=document.querySelector(".fa-arrow-up");

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 1000) {
      
      scrollber.classList.add('acctivescroll');
  }
  if (this.window.scrollY < 1000) {
    
      scrollber.classList.remove('acctivescroll');


  }
})
