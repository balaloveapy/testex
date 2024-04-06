'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useContext, useEffect } from "react";
import { Pai } from "./page.styled";
import { valores } from "./context/usecontext";
import Cookies from "ts-cookies";

export default function Home() {
  const navigation = useRouter()
  const context = useContext(valores);


  useEffect(() => {
    Cookies.set('token', {...context?.novos})
  }, [context?.novos])

  async function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nome = event.currentTarget.fname.value;
    if (nome.trim().length > 0 && context?.setinfor) {
      context.setinfor((info) => ({ ...info, pessoal: nome }));
    setTimeout(() => {
      navigation.push('/twoPage');
    }, 0);
    }
  }

  return (
    <Pai>
      <div className="passo">
        <p>Passo 1/3</p>
      </div>
      <div className="h1p">
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>
      </div>
      <div className="pai">
        <form method="post" onSubmit={next}>
          <div className="potavel">
            <label>
              Seu nome completo
              <br />
              <input name="fname" type="text" className="inputs" />
            </label>
          </div>
          <button className="button">Próximo</button>
        </form>
      </div>
    </Pai>
  );
}
