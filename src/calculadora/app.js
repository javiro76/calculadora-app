import html from "./app.html?raw";
import calculadoraStore from '../store/calculadora.store';
import { limpiarInput } from "./uses-cases/limpiar-input";


const ElementIDs = {
    BtnBorrar: '#btn-borrar',
    Num1:'#num1',
    Num2:'#num2',
    Resultado: '#resultado',
    BtnMultiplicar: "#btn-multiplicar",
    BtnDividir: "#btn-dividir",
    BtnSumar: "#btn-sumar",
    BtnRestar: "#btn-restar",

}



export const App = ( elementId ) => {

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();


    
    // Referencias HTML
    
    const clearButton = document.querySelector( ElementIDs.BtnBorrar );
    const num1 = document.querySelector( ElementIDs.Num1 );
    const num2 = document.querySelector( ElementIDs.Num2 );
    const resultado = document.querySelector( ElementIDs.Resultado );
    const btnMultiplicar = document.querySelector( ElementIDs.BtnMultiplicar);
    const btnDividir = document.querySelector( ElementIDs.BtnDividir );
    const btnSumar = document.querySelector( ElementIDs.BtnSumar );
    const btnRestar = document.querySelector( ElementIDs.BtnRestar);
    
    
    // Listeners
    
    
    clearButton.addEventListener('click',()=>{
        
        num1.value = '';
        num2.value = ''; 
        //pendiente cambiar el texto de hola por resultado
        resultado.innerText = 'resultado';
              
    });

    btnMultiplicar.addEventListener('click', ()=>{

        const res = calculadoraStore.multiplicar(num1.value,num2.value);
        resultado.innerText = res;

    });

    btnDividir.addEventListener('click', () => {

        const res = calculadoraStore.dividir(num1.value,num2.value);
        resultado.innerText = res;

    });

    btnSumar.addEventListener('click', ()=> {

        const res = calculadoraStore.sumar(parseInt(num1.value),parseInt(num2.value));
                  
        resultado.innerText = res;

    });

    btnRestar.addEventListener('click', ()=> {

        const res = calculadoraStore.restar(num1.value,num2.value);
        resultado.innerText = res;


    });

   
    
    
    
}; 