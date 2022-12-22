/* Linea que crear colores en Hexa */
const getNum0a255 = ():number => Math.floor(Math.random() * 256)

/* Definimos la clase color */
class Color {
    get():string {
        const color = `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
        return color
    }
}

const color:Color = new Color()

console.log(color.get())