var screenDiv = document.getElementsByClassName('screen')[0];

function getValue(value) {
    switch(value) {
        case '=':
            var result = eval(screenDiv.innerText);
            screenDiv.innerText = result;
            break;
        case '':
            screenDiv.innerText = "";
            break; 
        case 'back':
            screenDiv.innerText = screenDiv.innerText.slice(0, screenDiv.innerText.length - 1);
            break;
        default:
            screenDiv.innerText += value;
    }
}
