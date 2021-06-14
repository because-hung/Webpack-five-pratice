import './index.css'

console.log('hello world')

const btn = document.getElementById('btn')
const num = document.getElementById('num')
btn.addEventListener('click',function(){
    const b = parseInt(num.innerText, 10)
    num.innerText = b + 1
})

class Text {
    #a = 1
}

const tt = new Text()
console.log('tt.a',tt.a)