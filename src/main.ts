import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <ul>
  <li> <button value="false">1</button></li>
  <li> <button value="false">50</button></li>
  <li> <button value="true">123</button></li>
  <li> <button value="true">4</button></li>
</ul>
  </div>
`;

const r = document.querySelectorAll<HTMLButtonElement>('button');

r?.forEach((b) => {
	b.addEventListener('click', (e) => {
		console.log(b.value);
	});
});
