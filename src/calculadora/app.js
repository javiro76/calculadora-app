import html from "./app.html?raw";
import calculadoraStore from '../store/calculadora.store';

export const App = ( elementId ) => {

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();


}; 