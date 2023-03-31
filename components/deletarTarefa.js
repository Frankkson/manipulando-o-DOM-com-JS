const BotaoDeletar = () => {
	const botaoDeletar = document.createElement("button");
	botaoDeletar.classList.add("delete-button");
	botaoDeletar.innerText = "Deletar";

	botaoDeletar.addEventListener("click", deletarTarefa);

	return botaoDeletar;
};

const deletarTarefa = (evento) => {
	const botaoDeleta = evento.target;

	const removerTarefa = botaoDeleta.parentElement;

	removerTarefa.remove();

	return botaoDeleta;
};

export default BotaoDeletar;
