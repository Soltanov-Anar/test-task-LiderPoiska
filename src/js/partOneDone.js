$(document).ready(function(){
    //validate Forms
    function validateForms(form) {
        $(form).validate({
            rules: {
                length: {
                    required: true,
                    minlength: 1
                },
                height: {
                    required: true,
                    minlength: 1
                },
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 18
                }
            },
            messages: {
                length: {
                    required: "Неверно заполнено поле",
                },
                height: {
                    required: "Неверно заполнено поле",
                },
                phone: 'Пожалуйста, введите свой номер телефона',
                email: {
                  required: "Пожалуйста, введите свой имайл",
                  email: "Введите корректный имейл. Пример: name@domain.com."
                },
                name: {
                    required: "Пожалуйста, введите свое имя",
                    name: "Введите корректное имя. Примеры: Иван, Ян, Игорь."
                  }
              }
            
        });
    };

    validateForms('#consultation-form');
    validateForms('#second-form');

    //mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    //Mailer-server
     $('.main-about__feed').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'mailer/smart.php',
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val('');
            $('.main-about__feed').trigger('reset');
        });
        return false;
     });

     new WOW().init();
});

// btn 
const modal__btn = document.querySelector('.button');
console.log(modal__btn);

//checkNumInputs
const numInputs = document.querySelectorAll('.main__input');
console.log(numInputs);

//Inputs (1 and 2)
const firstInput = document.querySelectorAll('.main__input')[0];
const secondInput = document.querySelectorAll('.main__input')[1];
console.log(firstInput);
console.log(secondInput);

//On completion inputs
const firstInputSuccess = document.querySelector('.main__success');
const secondInputSuccess = document.querySelector('.main__success-Two');
console.log(secondInputSuccess);

const back = document.querySelector('.main-about__back');

//checl select
const select = document.getElementById('view_type');
console.log(select);

select.addEventListener('change', function() {  
  var getValue = this.value;
  // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
  console.log( getValue );
});

const main__total = document.querySelector('.main__total');


//Regular check number inputs
numInputs.forEach(item => {
    item.addEventListener('input', () => {
        item.value = item.value.replace(/\D/, '');
        if (firstInput.value > 0 && secondInput.value > 0) {
            select.addEventListener('change', () => {
                if (select.selectedIndex != '0') {
                    modal__btn.style.backgroundImage = "url('icons/button_pressed.png')";
                    modal__btn.disabled = false;
                    const total = +firstInput.value + +secondInput.value + +select.value;
                    main__total.textContent = `${total}`;
                    modal__btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        firstForm.style.display = 'none';
                        secondForm.style.display = 'block';
                        back.style.display = 'block';
                    });
                } else {
                    modal__btn.disabled = true;
                    modal__btn.style.backgroundImage = "url('icons/button.svg')"; 
                }
            });
        } else {
            modal__btn.style.backgroundImage = "url('icons/button.svg')"; 
        }
        
        if (firstInput.value > 0) {
            firstInputSuccess.style.display = "block";
        } else {
            firstInputSuccess.style.display = "none";
        }

        if (secondInput.value > 0) {
            secondInputSuccess.style.display = "block";
        } else {
            secondInputSuccess.style.display = "none";
        }
    });
  });

//function for add Event
const addEvent = (elem, event, selector) => {
    return elem.addEventListener(event, () => {
        elem.style.backgroundImage = `url(${selector})`; 
    });
}

addEvent(modal__btn, 'mouseover', 'icons/button_hover.svg');
addEvent(modal__btn, 'mouseout', 'icons/button.svg');
addEvent(modal__btn, 'mousedown', 'icons/button_pressed.png');
addEvent(modal__btn, 'mouseup', 'icons/button_hover.svg');


// on click fadeInUp
const firstForm = document.querySelector('.main__form');
console.log(firstForm);

const secondForm = document.querySelector('.main-about');
console.log(secondForm);


// Second Form

const mainAboutInputs = document.querySelectorAll('.main-about__input');
console.log(mainAboutInputs);

const nameInput = document.querySelectorAll('.main-about__input')[0];
console.log(nameInput);

const emailInput = document.querySelectorAll('.main-about__input')[1];
console.log(emailInput);

const phoneInput = document.querySelectorAll('.main-about__input')[2];
console.log(phoneInput);

const btn_continue = document.querySelector('.button-continue');
console.log(btn_continue);

//On completion inputs
const nameInputSuccess = document.querySelector('.main-about__success-Third');
const emailInputSuccess = document.querySelector('.main-about__success-Four');
const phoneInputSuccess = document.querySelector('.main-about__success-Five');
console.log(nameInputSuccess, emailInputSuccess, phoneInputSuccess);

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
console.log(reg);

//Regular check number inputs
mainAboutInputs.forEach(item => {
    item.addEventListener('input', () => {     
        if (nameInput.value.length > 1) {
            nameInputSuccess.style.display = "block";
        } else {
            nameInputSuccess.style.display = "none";
        }
        if (emailInput.value.length > 7) {
            emailInputSuccess.style.display = "block";
        } else {
            emailInputSuccess.style.display = "none";
        }

        if (phoneInput.value.length == 18){
            phoneInputSuccess.style.display = "block";
        } else {
            phoneInputSuccess.style.display = "none";
        }

        if (nameInput.value.length > 1 && emailInput.value.length > 7 && phoneInput.value.length == 18) {
            btn_continue.style.background = "linear-gradient(180deg, #4892EC 0%, #2F79D4 100%)";
            btn_continue.disabled = false; 
            btn_continue.addEventListener('click', () => {
                secondForm.style.display = 'none';
                modal_last.style.display = 'block';
            });
            btn_continue.addEventListener('mousedown', () => {
                btn_continue.style.background = "#256FCA";   
            });
            btn_continue.addEventListener('mouseout', () => {
                btn_continue.style.background = "linear-gradient(180deg, #4892EC 0%, #2F79D4 100%)";
            });
        } else {
            btn_continue.style.background = "linear-gradient(180deg, #818387 0%, #696B6F 100%)";
            btn_continue.disabled = true; 
        }

    });
});

back.addEventListener('click', () => {
    firstForm.style.display = 'block';
    secondForm.style.display = 'none';
    back.style.display = 'none';
    modal__btn.style.backgroundImage = "url('icons/button_pressed.png')";
})

//close modal 
const btn_close = document.querySelector('.main-done__close');
const modal_last = document.querySelector('.main-done');

btn_close.addEventListener('click', () => {
    modal_last.style.display = 'none';
})


const metr = (input, span) => {
    input.addEventListener('input', () => {
        const declOfNum = (n, text_forms) => {  
            n = Math.abs(n) % 100; 
            var n1 = n % 10;
            if (n >= 10 && n <= 20) { return span.textContent = text_forms[2]; }
            if (n1 > 1 && n1 < 5) { return span.textContent = text_forms[1]; }
            if (n1 == 1) { return span.textContent = text_forms[0]; }
            if (n == 0) { return span.textContent = text_forms[2]; }
            return text_forms[2];
        }
        
        declOfNum(input.value, ['метр', 'метра', 'метров']);
        declOfNum(input.value, ['метр', 'метра', 'метров']);
    });
}

const spanOne = document.querySelector('.main__span');
const spanTwo = document.querySelector('.main__span-two');

metr(firstInput, spanOne);
metr(secondInput, spanTwo);
console.log(spanOne, spanTwo);





const funcSumTotal = (length, height, type, isMontage) => {
    const sum = 0;

};