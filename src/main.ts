import { dibujarPreguntasRespuestas } from './preguntando/db/preguntando';
import './style.css';

const divApp = document.querySelector<HTMLDivElement>('#app')!;

dibujarPreguntasRespuestas(divApp);

console.log('v1.0.0');
