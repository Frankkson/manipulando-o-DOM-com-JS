const BotaoConcluir = () => {
	const botaoConcluir = document.createElement("input");

	botaoConcluir.type = "checkbox";
	botaoConcluir.addEventListener("click", concluirTarefa);

	return botaoConcluir;
};

const concluirTarefa = (evento) => {
	const botaoConclui = evento.target;

	const tarefaConcluida = botaoConclui.parentElement;

	tarefaConcluida.classList.toggle("done");
};

export default BotaoConcluir;
