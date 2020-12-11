// Interfaces
enum Color {
    Rojo = 'Rojo',
    Azul = 'Azul'
}

interface Rectangulo {
    ancho: number,
    alto: number
    color?: Color
}

let rect: Rectangulo =  {
    ancho: 4,
    alto: 6,
    // color: Color.Azul
}

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color ? `Un rectangilo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());

