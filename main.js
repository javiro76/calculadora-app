import './style.css'
import calculadoraStore from "./src/store/calculadora.store";
import { App } from './src/calculadora/app';



calculadoraStore.initStore();

App('#app');