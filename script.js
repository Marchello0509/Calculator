const htmlEl = {
    input: document.querySelector('#input'),
    numEl: document.querySelector('#numEl')
}

console.log(htmlEl)

htmlEl.numEl.addEventListener('click', (element) => {
    const value = element.target.innerText

    switch(value) {
        case 'AC':
            htmlEl.input.innerText = ''
            break
        case '=':
            htmlEl.input.innerText = eval(input.innerText)
            break
        default:
            htmlEl.input.innerText += value
    }
})