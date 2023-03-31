(() => {
	const CriarTarefa = (evento) => {
		evento.preventDefault();
		const lista = document.querySelector("[data-list]");
		const input = document.querySelector("[data-form-input]");
		const inputValue = input.value;
		console.log(inputValue);
		input.value = "";

		const conteudo = `<p class="content">${inputValue}</p>`;
		const tarefa = document.createElement("li");

		tarefa.innerHTML = conteudo;
		tarefa.classList.add("task");
		tarefa.appendChild(BotaoConcluir());
		lista.appendChild(tarefa);

		input.value = "";
	};

	const novaTarefa = document.querySelector("[data-form-button]");

	novaTarefa.addEventListener("click", CriarTarefa);

	const BotaoConcluir = (evento) => {
		const botaoConcluir = document.createElement("button");

		botaoConcluir.classList.add("check-button");
		botaoConcluir.innerText = "Concluir";
		botaoConcluir.addEventListener("click", concluirTarefa);

		return botaoConcluir;
	};

	const concluirTarefa = (evento) => {
		const botaoConclui = evento.target;

		const tarefaConcluida = botaoConclui.parentElement;

		tarefaConcluida.classList.toggle("done");
	};
})();
