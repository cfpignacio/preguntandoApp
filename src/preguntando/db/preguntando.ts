import { IPreguntaRespuesta } from './preguntado.interface';

export function dibujarPreguntasRespuestas(
	pr: IPreguntaRespuesta,
	elemento: HTMLDivElement
) {
	elemento.innerHTML = `<h1>${pr.pregunta}</h1>`;

	const ul = document.createElement('ul');

	pr.respuestas.forEach((r) => {
		const li = document.createElement('li');
		const btn = document.createElement('button');
		btn.value = String(r.correcta);
		btn.textContent = r.respuesta;
		li.appendChild(btn);
		ul.appendChild(li);
	});

	elemento.appendChild(ul);
}
