describe('Triangle', () => {
    test('render correctly', () => {
        const shape = new Triangle ();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`)
    });
});

describe('Circle', () => {
    test('render correctly', () => {
        const shape = new Circle ();
        var color =('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="${this.color}" />`)
    });
});

describe('Square', () => {
    test('render correctly', () => {
        const shape = new Square ();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`)
    });
});