let fontsize = 16;
const textbox = document.getElementById('textbox');
const fontSize_Input = document.getElementById('fontSizeInput'); 

function resizeToWindow(){
    document.getElementById('textbox').style.width = (window.innerWidth - 15) + 'px';
    document.getElementById('textbox').style.height = (window.innerHeight - 75) + 'px';
}
resizeToWindow();

document.getElementById('resize_button').addEventListener('click', resizeToWindow);

document.getElementById('fontsize++').addEventListener('click', function(){
    fontsize += 2;
    fontSize_Input.value = fontsize;
    textbox.style.fontSize = fontsize + 'px';
});

document.getElementById('fontsize--').addEventListener('click', function(){
    fontsize -= 2;
    fontSize_Input.value = fontsize;
    textbox.style.fontSize = fontsize + 'px';
});

document.getElementById('fontSizeInput').addEventListener('input', function(){
    const size = this.value;
    document.getElementById('textbox').style.fontSize = size + 'px';
})