import html from "./app.html?raw";
import calculadoraStore from '../store/calculadora.store';
import { limpiarInput } from "./uses-cases/limpiar-input";

let element;
export const App = ( elementId ) => {

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();


    
    // Referencias HTML
    
    const clearButton = document.querySelector('#btn-borrar');
    const num1 = document.querySelector('#num1');
    const num2 = document.querySelector('#num2');
    const resultado = document.querySelector('#resultado');
    
    
    // Listeners
    
    
    clearButton.addEventListener('click',()=>{
        
        num1.value = '';
        num2.value = ''; 
        //pendiente cambiar el texto de hola por resultado
        resultado.innerText = 'Hola'
      
        
    });
    
    
    
}; 