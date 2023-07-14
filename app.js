const form = document.getElementById("form")
const input = document.getElementById("input")
const result = document.getElementById("result")

const clear = document.getElementById("clear")
const del = document.getElementById("del")
const sub = document.getElementById("sub")
const add = document.getElementById("add")
const mult = document.getElementById("mult")
const divide = document.getElementById("divide")
const equal = document.getElementById("equal")
const _7 = document.getElementById("7")
const _8 = document.getElementById("8")
const _9 = document.getElementById("9")
const _4 = document.getElementById("4")
const _5 = document.getElementById("5")
const _6 = document.getElementById("6")
const _1 = document.getElementById("1")
const _2 = document.getElementById("2")
const _3 = document.getElementById("2")



let inputValue = ""
let resultString = ""
input.addEventListener('input', (e) => {
    inputValue = input.value
})
clear.addEventListener('click',()=>{
    input.value = ""
})
del.addEventListener('click', ()=>{
    inputValue = inputValue.substring(0,inputValue.length-1) 
    input.value = inputValue
})




let r;
form.addEventListener('submit', e => {
    e.preventDefault()

    // process values
    if (inputValue.includes('+')) {
        // addition
        r = inputValue.trim().split('+')
        resultString = `${parseFloat(r[0])} + ${parseFloat(r[1])} = ${parseFloat(r[0]) + parseFloat(r[1])}`
        console.log(parseFloat(r[0]) + parseFloat(r[1]))
    }
    else if (inputValue.includes('-')) {
        // subtraction
        r = inputValue.trim().split('-')
        resultString = `${parseFloat(r[0])} - ${parseFloat(r[1])} = ${parseFloat(r[0]) - parseFloat(r[1])}`

        console.log(parseFloat(r[0]) - parseFloat(r[1]))
    }
    else if (inputValue.includes('*')) {

        // multiply
        r = inputValue.trim().split('*')
        resultString = `${parseFloat(r[0])} * ${parseFloat(r[1])} = ${parseFloat(r[0]) * parseFloat(r[1])}`

        console.log(parseFloat(r[0]) * parseFloat(r[1]))
    }
    else if (inputValue.includes('/')) {
        // divide
        r = inputValue.trim().split('/')
        resultString = `${parseFloat(r[0])} / ${parseFloat(r[1])} = ${parseFloat(r[0]) / parseFloat(r[1])}`
        console.log(parseFloat(r[0]) / parseFloat(r[1]))
    }
    else{
        resultString = `${inputValue} can't be understood`
    }
    result.textContent = resultString
})