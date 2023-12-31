// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a otra moneda, estas pueden ser a dólares, yenes o libras. 
// El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no devolverá ningún valor, 
// mostrará un mensaje indicando el cambio. El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let monedaEuro = prompt('Introduce una cantidad de euros para convertirla: ');
let tipoMoneda = prompt('A que tipo de moneda desea convertir: libras, dólares o yenes');

const ConvertidorMonedas = (euros, moneda) => {
    let cambio = 0;

    switch (moneda) {
        case "libras":
            cambio = 0.86 * euros;
            break;
        case "dólares":
            cambio = 1.28611 * euros;
            break;
        case "yenes":
            cambio = 129.852 * euros;
            break;
        default:
            alert("Moneda no válida.");
            break;
    }
    alert(`El cambio de euros a ${moneda} es de ${cambio}`);
}

ConvertidorMonedas(monedaEuro, tipoMoneda);