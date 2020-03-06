let btn = document.querySelectorAll('.btns__item')
let content = document.querySelectorAll('.content__item')

//функция показа контента по нажатию кнопки
function showContent(props) {

  let btnActive = document.querySelector('.btn-active')
  btnActive.classList.remove('btn-active')
  btn[props].classList.add('btn-active')

  let contentActive = document.querySelector('.content-active')
  contentActive.classList.remove('content-active')

  content[props].classList.add('content-active')
}

//к кнопкам применяем функцию
btn[0].addEventListener('click', function(){showContent(0)})
btn[1].addEventListener('click', function(){showContent(1)})
btn[2].addEventListener('click', function(){showContent(2)})
btn[3].addEventListener('click', function(){showContent(3)})
btn[4].addEventListener('click', function(){showContent(4)})

