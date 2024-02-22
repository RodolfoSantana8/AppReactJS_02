import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [estadoInterruptor, setEstadoInterrupetor] = useState(false)
  const [contador, setContador] = useState(0)

function mudarLampada(){
  setEstadoInterrupetor(!estadoInterruptor)
  if (estadoInterruptor == false)
  setContador(contador+1)
}

  return (
    <div>
      <h2>{contador <10 ? `Você já ligou ${contador} vezes a lâmpada`
      : "Sua lampada explodiu!"} </h2>      
    { contador >= 10 
      ? <Image src={"/assets/bom.png"} width={638} height={640}/>  
      : estadoInterruptor == true 
      ? <Image src={"/assets/on.png"} width={286} height={388}/>
      : <Image src={"/assets/off.png"} width={286} height={388}/>
    }     
      <button onClick={mudarLampada}>Interruptor</button>
    </div>
  );
}
