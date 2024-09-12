class Button {
    constructor(width, height, color) {
        this.props = { 
            width: width,
            height: height,
            type: 'button',
            color: color,
    }
    }
    onClick() {
        console.log(this.props)
    }
}

const myButton = new Button(75, 20, 'green');
myButton.onClick();

function testButton(button) {
    if (button.props.width === 75 && button.props.height === 20 && button.props.type === 'button' && button.props.color === 'green') {
        return true
    } else {
        return false
    }
}

console.log(testButton(myButton));
