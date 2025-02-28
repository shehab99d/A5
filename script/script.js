const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'black'];
let currentColorIndex = 0;

document.getElementById('color-btn').addEventListener('click', function(){
    document.body.style.background = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
})

