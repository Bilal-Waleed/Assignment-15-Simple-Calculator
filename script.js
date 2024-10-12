var screenDiv = document.getElementsByClassName('screen')[0];

function getValue(value) {
    switch (value) {
        case '=':
            if (screenDiv.innerText) { 
                screenDiv.innerText = eval(screenDiv.innerText);
            }
            break;
        case '':
            screenDiv.innerText = "";
            break;
        case 'back':
            screenDiv.innerText = screenDiv.innerText.slice(0, -1);
            break;
        default:
            screenDiv.innerText += value;
    }
}
