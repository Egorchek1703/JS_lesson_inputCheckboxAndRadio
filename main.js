// Цель урока заключается, в том, чтобы научиться с помощью js опеределять выбран или нет тот или иной input (checkbox/radio)

// checkbox
const checkbox = document.querySelector('.checkbox')

function lookAtCheckbox(){
    if(checkbox.checked){
        console.log('Checkbox активен')
    }
    else{
        console.log('Checkbox выключен')
    }
}

checkbox.addEventListener('change', lookAtCheckbox)

// radio (в данном случае особенность заключается в том, что есть массив элементов)
const radioButtons = document.querySelectorAll('.radio')

// функция проверяющая статус radio кнопки
function lookAtRadio(){
    for(let i=0; i<radioButtons.length; i++){
        if(radioButtons[i].checked){
            console.log(`Выбран вариант: ${radioButtons[i].parentElement.innerText}`)
        }
        else{
            console.log(`Вариант ${radioButtons[i].parentElement.innerText} не выбран`)
        }
    }
}
// цикл присваивающий каждой radio кнопке слушатель события change, при котором будет выводится статус кнопки благодаря предыдущей функции
for(let i=0; i<radioButtons.length; i++){
    radioButtons[i].addEventListener('change', lookAtRadio)
}
