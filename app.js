import BotaoConcluir from "./components/concluirTarefa.js";
import BotaoDeletar from "./components/deletarTarefa.js";

const CriarTarefa = (evento) => {
	evento.preventDefault();
	const lista = document.querySelector("[data-list]");
	const input = document.querySelector("[data-form-input]");
	const inputValue = input.value;
	input.value = "";

	const conteudo = `<p class="content">${inputValue}</p>`;

	const verificaInput = () => {
		if (inputValue === "") {
			alert("Por favor, digite uma descrição para a tarefa e tente novamente.");
			return;
		} else {
			const tarefa = document.createElement("li");
			tarefa.innerHTML = conteudo;
			tarefa.classList.add("task");
			tarefa.appendChild(BotaoConcluir());
			tarefa.appendChild(BotaoDeletar());
			lista.appendChild(tarefa);
		}
	};
	verificaInput();
	input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", CriarTarefa);
