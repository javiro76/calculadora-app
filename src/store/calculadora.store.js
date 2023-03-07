

const initStore = () => {
    console.log('InitStore 😁');
};



/**Funcion que realiza operacion de multiplicación
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns 
 */
const multiplicar = (num1,num2) => {

    if (!num1 || !num2 ) throw new Error ('Los dos números son requeridos')

    return num1*num2

};

const dividir = (num1,num2) => {

    if (!num1 || !num2 ) throw new Error ('Los dos números son requeridos')

    return num1/num2

};

const sumar = (num1,num2) => {

    if (!num1 || !num2 ) throw new Error ('Los dos números son requeridos')

    return num1+num2

};

const restar = (num1,num2) => {

    if (!num1 || !num2 ) throw new Error ('Los dos números son requeridos')

    return num1-num2

};

export default {
    dividir,
    initStore,
    multiplicar,
    restar,
    sumar,

}

console.log(multiplicar(3,4)); 
console.log(dividir(4,8));
console.log(sumar(4,8));
console.log(restar(4,8));