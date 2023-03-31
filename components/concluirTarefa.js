const BotaoConcluir = () => {
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

export default BotaoConcluir;
