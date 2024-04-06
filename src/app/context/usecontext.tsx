'use client'
import { createContext, useState } from "react";

type info={
    pessoal:string,
    profissional:string,
    contatos:{
        email:string,
        github:string
    }
    pagina:string,
}

type juntar ={
    novos:info,
    setinfor:React.Dispatch<React.SetStateAction<info>>
}
export const valores =createContext<juntar|undefined>(undefined)
export function Var({children,}: Readonly<{children: React.ReactNode;}>){
    const [novos,setinfor] = useState<info>({
        pessoal: '',
        profissional: '',
        contatos:{
            email:'',
            github:''
        },
        pagina:'a'
    })
    return(
        <valores.Provider value={{novos,setinfor}}>
            {children}
        </valores.Provider>
    )
}