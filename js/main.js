$(document).ready(function() {

  const menuToggle = document.querySelector('.toggle-menu');
  const mobMenu = document.querySelector('.header-menu');
  const overlayElement = document.querySelector('#overlay');
  const bodyElement = document.body;

  // Клик по гамбургер-меню
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlayElement.classList.toggle('active');
    bodyElement.classList.toggle('noscroll');
  });


   // Клик по мобильному меню
   mobMenu.addEventListener('click', function() {
     this.classList.remove('active');
     menuToggle.classList.remove('active');
     overlayElement.classList.remove('active');
     bodyElement.classList.remove('noscroll');
   });


   // Закрытие mobMenu при клике по оверлэю
   overlayElement.addEventListener('click', function() {
    this.classList.remove('active');
    menuToggle.classList.remove('active');
    mobMenu.classList.remove('active');
    bodyElement.classList.remove('noscroll');
   });


   // Закрытие mobMenu при ресайзе экрана
   window.addEventListener('resize', function() {
    mobMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlayElement.classList.remove('active');
     bodyElement.classList.remove('noscroll');
   });


   // Добавление класса для fix-menu при скроле страницы
   const fixMenu = document.querySelector('.fix-menu');

   window.addEventListener('scroll', function() {
     if (this.pageYOffset > 10) {
      fixMenu.classList.add('active');
    }
    else {
      fixMenu.classList.remove('active');
    }
  });
  
  //иконка скролла вверрх
  var smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0,-50);
      setTimeout(smoothJumpUp, 10);
    }
  }
  
  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
    } else {
      document.getElementById('upbutton').style.display = 'none';
    }
  }

  // FORM PLACEHOLDER
  const formInputs = document.querySelectorAll('.form-field');
  for(let item of formInputs) {
    const thisPlaceholder = item.nextElementSibling;

    item.addEventListener('focus', function() {
      thisPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function() {
      if (item.value == '') {
        thisPlaceholder.classList.remove('active');
      }
    })
  }

  // FORM PLACEHOLDER
  $('#contacts__form').validate({
    rules: {
      userName: {
        required: true        
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },
    message: {
      userName: {
        required: 'Введите имя'      
      },
      email: {
        required: 'Введите email',
        email: 'отсутствует символ @'
      },
      message: {
        required: 'Введите текст сообщения'
      }
    }
  })

  // MixitUp - миксуем карточки в портфолио (пока "сыро")
  let containerEl = document.querySelector('.portfolio-cards');
  let mixer = mixitup(containerEl);


  // Перемещение активного класса в навигации портфолио
  let portfolioLink = document.querySelectorAll(".portfolio-nav__item");
  for (let elem of portfolioLink) {
    elem.addEventListener('click', function() {
      // console.log("click");
      document.querySelector('.portfolio-nav__item_active').classList.remove('portfolio-nav__item_active');
      elem.classList.add('portfolio-nav__item_active');
    })
  }
  

});

