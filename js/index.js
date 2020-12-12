const button  = document.querySelector('button')
const bady  = document.querySelector('body')
const colors = ['red', 'green' , 'bule' , 'yellow', 'pink' , 'purple']

bady.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length+1)
    bady.style.backgroundColor = colors[colorIndex]
}