import html from "./app.html?raw";
import calculadoraStore from '../store/calculadora.store';
import { limpiarInput } from "./uses-cases/limpiar-input";


const ElementIDs = {
    BtnBorrar: '#btn-borrar',
    Num1:'#num1',
    Num2:'#num2',
    Resultado: '#resultado',

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
    
    
    // Listeners
    
    
    clearButton.addEventListener('click',()=>{
        
        num1.value = '';
        num2.value = ''; 
        //pendiente cambiar el texto de hola por resultado
        resultado.innerText = 'Hola'
      
        
    });
    
    
    
}; 