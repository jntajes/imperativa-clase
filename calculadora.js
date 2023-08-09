// calculadora nivel 1

const sumar = (n1, n2) => n1 + n2
 
const restar = (n1, n2) => n1 - n2

const multiplicar = (n1, n2) => n1 * n2

const dividir = (n1, n2) => n1 / n2

// calculadora nivel 2

let resultadoSuma = sumar(1, 2)
console.log(`La suma es: ${resultadoSuma}`)

let resultadoRestar = restar(3, 4)
console.log(`La resta es: ${resultadoRestar}`)

let resultadoMultiplicar = multiplicar(1, 2)
console.log(`La multiplicación es: ${resultadoMultiplicar}`)

let resultadoDivision = dividir(4, 2)
console.log(`La division es: ${resultadoDivision}`)

// calculadora nivel 3

const cuadradoDeUnNumero = (n1) => {
    let resultado = multiplicar(n1, n1)
    return resultado
}
let nAlCuadrado = cuadradoDeUnNumero (8)
console.log(nAlCuadrado)

const promedioDeTresNumeros = (n1, n2, n3) => {
    let resultadoSuma = sumar(n1, sumar(n2, n3))
    let promedio = dividir(resultadoSuma, 3)
    return promedio
} 
let resultadoPromedio = promedioDeTresNumeros(10, 15, 20)
console.log(resultadoPromedio)

const porcentaje = (numeroTotal, porcentaje) => {
    let resultadoPorcentaje = multiplicar(numeroTotal, dividir(porcentaje, 100))
    return resultadoPorcentaje
}
let resPorcentaje = porcentaje(100, 50)
console.log(resPorcentaje)

const generadorDePorcentaje = (n1, n2) => {
    let resultadoDividir = dividir(multiplicar(n1,100),n2)
    return resultadoDividir
}
let generador = generadorDePorcentaje = (10, 100)
console.log(generador)