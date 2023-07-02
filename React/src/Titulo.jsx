import { useState } from "react"

function Titulo(){
    const [texto, setTexto] = useState("Hello World!")
    const [inputText, setInputText] = useState("")

    function clicou(){
        setTexto(inputText);
    }

    return(
        <div>
            <h1>{texto}</h1>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    )

}

export default Titulo