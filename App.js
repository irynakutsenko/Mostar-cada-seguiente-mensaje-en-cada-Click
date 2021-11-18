import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
	let palabrasArray = ["ONGI ETORRI GURE HERRIRA", "EUSKAL HERRIRA ;)","ZER MODUZ?", "ONDO PASA!"]
	let [palabra,cambiarPalabra] = useState(0);
	
	function mostarMensaje(){
		cambiarPalabra(palabra + 1);
		console.log(palabra);
	}
	return (
		<>
		<h1>{palabrasArray[palabra]}</h1>
		<button onClick={mostarMensaje}>Click</button>
		</>
	)	
	
}

export default App;
