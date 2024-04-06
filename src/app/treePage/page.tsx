'use client'
import { useRouter } from "next/navigation";
import { Pai } from "../page.styled";

export default function Contatos() {
    const router = useRouter()
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
                <form method="post">
                    <div className="potavel">
                        <div>
                            <label>
                                Qual seu e-email?
                                <br />
                                <input name="fname" type="email" className="inputs" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Qual seu GitHub?
                                <br />
                                <input name="fname" type="email" className="inputs" />
                            </label>
                        </div>

                    </div>
                    <button className="button">Próximo</button>
                    <button className="buttonBack" onClick={()=>router.back()}>voltar</button>
                </form>
            </div>
        </Pai>
    )
}