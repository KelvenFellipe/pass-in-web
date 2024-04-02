interface MeuBotaoProps{
	texto: string
}
function MeuBotao(props: MeuBotaoProps){
	return <button className="bg-orange-400 h-10">{props.texto}</button>
}
function App() {
	return (
		<div>
			<MeuBotao texto="Clique aqui"/>
		</div>
	)
}

export default App