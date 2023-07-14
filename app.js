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
const decimal = document.getElementById("decimal")
const _7 = document.getElementById("7")
const _8 = document.getElementById("8")
const _9 = document.getElementById("9")
const _4 = document.getElementById("4")
const _5 = document.getElementById("5")
const _6 = document.getElementById("6")
const _1 = document.getElementById("1")
const _2 = document.getElementById("2")
const _3 = document.getElementById("3")
const _0 = document.getElementById("0")



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

sub.addEventListener('click', ()=>{
    inputValue = inputValue+'-'
    input.value = inputValue
})
add.addEventListener('click', ()=>{
    inputValue = inputValue+'+'
    input.value = inputValue
})
mult.addEventListener('click', ()=>{
    inputValue = inputValue+'*'
    input.value = inputValue
})
divide.addEventListener('click', ()=>{
    inputValue = inputValue+'/'
    input.value = inputValue
})
_7.addEventListener('click', ()=>{
    inputValue = inputValue+'7'
    input.value = inputValue
})
_8.addEventListener('click', ()=>{
    inputValue = inputValue+'8'
    input.value = inputValue
})
_9.addEventListener('click', ()=>{
    inputValue = inputValue+'9'
    input.value = inputValue
})
_4.addEventListener('click', ()=>{
    inputValue = inputValue+'4'
    input.value = inputValue
})
_5.addEventListener('click', ()=>{
    inputValue = inputValue+'5'
    input.value = inputValue
})

_6.addEventListener('click', ()=>{
    inputValue = inputValue+'6'
    input.value = inputValue
})
_1.addEventListener('click', ()=>{
    inputValue = inputValue+'1'
    input.value = inputValue
})
_2.addEventListener('click', ()=>{
    inputValue = inputValue+'2'
    input.value = inputValue
})

_3.addEventListener('click', ()=>{
    inputValue = inputValue+'3'
    input.value = inputValue
})

_0.addEventListener('click', ()=>{
    inputValue = inputValue+'0'
    input.value = inputValue
})
decimal.addEventListener('click', ()=>{
    inputValue = inputValue+'.'
    input.value = inputValue
})
equal.addEventListener('click', (e)=>{
    e.submit()
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