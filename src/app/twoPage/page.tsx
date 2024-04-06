'use client'
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Pai } from "../page.styled"
import { valores } from "../context/usecontext";
import Cookies from "ts-cookies";

export default function Profisional() {
    const rota = useRouter()
    const context = useContext(valores);
    useEffect(() => {
        Cookies.set('token', {...context?.novos})
      }, [context?.novos])
    function escolha(b: string) {
        context?.setinfor((a) => ({ ...a, profissional:b}))
    }
    function treePage() {
        console.log(JSON.parse(Cookies.get('token')))
        if (JSON.parse(Cookies.get('token')).profissional !=='') {
                rota.push('/treePage')
                console.log('ola')
        }
    }
    return (
        <Pai>
            <div className="passo">
                <p>2/3</p>
            </div>
            <div className="h1p">
                <h1>{context?.novos.pessoal} o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente</p>
            </div>
            <div className="escolha" onClick={() => escolha('iniciante')}>
                <div className="option">
                    <div className="emoji">🥳</div>
                    <div className="texto">
                        <h1>Sou iniciante</h1>
                        <p>comecei a programar há menos de 2 anos</p>
                    </div>

                </div>
                <div className="option" onClick={() => escolha('avançado')}>
                    <div className="emoji">😎</div>
                    <div className="texto">
                        <h1>sou programador</h1>
                        <p>comecei a programar há mais de 2 anos</p>
                    </div>
                </div>
            </div>
            <button className="button" onClick={treePage}>Próximo</button>
            <button className="buttonBack" onClick={() => rota.back()}>Retornar</button>
        </Pai>
    )
}