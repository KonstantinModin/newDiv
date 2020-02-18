'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.margin = 'auto';       
    }
    newDiv() {
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = prompt('Введите текст', 'New div');        
        var s = div.style;
        s.height = this.height;
        s.width = this.width;
        s.background = this.bg;
        s.fontSize = this.fontSize;
        s.textAlign = this.textAlign;
        s.margin = this.margin;
    }
}

var optionB = new Options('100px', '300px', 'red', '150%', 'center');
console.log(optionB);
optionB.newDiv();
