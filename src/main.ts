import { PreguntasRespuestas } from './preguntando/db/database';
import { dibujarPreguntasRespuestas } from './preguntando/db/preguntando';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
`;

const divApp = document.querySelector<HTMLDivElement>('#app')!;

const db = PreguntasRespuestas;

// dibujarPreguntasRespuestas(db[0], divApp);

dibujarPreguntasRespuestas(db[0], divApp);

const b = document.querySelectorAll('button')!;

b.forEach((btn) => {
	btn.addEventListener('click', () => {
		dibujarPreguntasRespuestas(db[1], divApp);
		console.log(btn.value);
	});
});
