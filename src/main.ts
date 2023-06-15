import { PreguntasRespuestas } from './preguntando/db/database';
import { dibujarPreguntasRespuestas } from './preguntando/db/preguntando';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``;

const divApp = document.querySelector<HTMLDivElement>('#app')!;

dibujarPreguntasRespuestas(divApp);
