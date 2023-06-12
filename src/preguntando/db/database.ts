import { IPreguntaRespuesta } from './preguntado.interface';

export const PreguntasRespuestas: IPreguntaRespuesta[] = [
	{
		pregunta: '¿cuanto es 1+1?',
		respuestas: [
			{ respuesta: '2', correcta: true },
			{ respuesta: '3', correcta: false },
			{ respuesta: '4', correcta: false },
		],
	},
	{
		pregunta: '¿cuanto es 5x5?',
		respuestas: [
			{ respuesta: '25', correcta: true },
			{ respuesta: '33', correcta: false },
			{ respuesta: '41', correcta: false },
			{ respuesta: '41', correcta: false },
		],
	},
];
