const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
//необходимо добавить класс lock-padding для всех фиксированных элементов
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            //отправляем объект который является ближайшем родителем с классом popup
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            //идет проверка есть ли класс popup у родителя
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.querySelector('body').offsetWidth +
        'px';
    if (lockPadding.length >0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    //блочим на период анимации css что б не было повторных нажатий
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout); 
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
          for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
          }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

// Add close modal push Escape

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {  
        const popupActive = document.querySelector('.popup.open');

         // Проверка
        if (popupActive) {
            popupClose(popupActive);
            // const isExist = Array.from(
            //   popupActive?.classList).includes('open');
        }
        // const isExist = popupActive?.classList.includes('open');
            // popupClose(popupActive);
        // console.log(Array.from(popupActive?.classList));
        // console.log(isExist);
        
      }
})


    // Добавляем полифилы для closest и matches

//     (function () {
//         //Проверяем
//         if (!Element.prototype.closest) {
//             //Реализуем
//             Element.prototype.closest = function (css) {
//                 var node = this;
//                 while (node) {
//                     if (node.matches(css)) return node;
//                     else node = node.parentElement;
//                 }
//                 return null;
//             }
//         }
//     })();

// (function () {
//     if (!Element.prototype.matches) {
//         Element.prototype.matches = Element.prototype.matchesSelector ||
//             Element.prototype.webkitMatchesSelector ||
//             Element.prototype.mozMatchesSelector ||
//             Element.prototype.msMatchesSelector;
//     }
// })();