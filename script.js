


let input = document.getElementById('number');
let number_wrapper = document.querySelector('.number-wrapper')
// input.addEventListener('change',()=>{
   
// })
let btn = document.querySelector(".btn")
btn.addEventListener('click', showNumber)
function showNumber() {
    input.addEventListener('change',()=>{
        if(number_wrapper.innerHTML != ''){
            number_wrapper.innerHTML = ''
        }
    })
    if (input.value != '') {
        for (let i = 1; i <= input.value; i++) {
            let number_box = document.createElement('div')
            number_wrapper.style.display = 'flex'
            number_wrapper.style.justifyContent = 'center'
            number_wrapper.style.alignItems = 'center'
            number_wrapper.style.flexWrap = 'wrap'
            number_wrapper.append(number_box)
            // number_box.style.border = '1px solid orange'
            number_box.style.width = '105px'
            number_box.style.boxShadow = '0px 0px 2px black'
            number_box.style.height = '105px'
            number_box.style.display = 'flex'
            number_box.style.alignItems = 'center'
            number_box.style.justifyContent = 'center'
            number_box.style.textAlign = 'center'
            number_box.style.margin = '0.3em 0.3em'
            number_box.style.fontSize = '1.3rem'
            number_box.style.fontWeight = 'bold'
            number_box.style.backgroundColor = 'yellow'
            number_box.innerHTML = i;
            number_box.style.color = 'blue'
        }
    } else {
        alert("enter valid input")
    }
    // console.log(input)
}

    // showNumber()

