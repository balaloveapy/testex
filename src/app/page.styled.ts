import {styled} from "styled-components";

export const Pai = styled.div`
.passo{
        margin-bottom: 30px;
    }
.h1p{
    margin-bottom:50px;
    h1{
        font-size:22px ;
    }
}
.pai{

    form{
        label{
            input{
            width: 500px;
            border-radius: 15px;
            border: solid #24cd89;
            background: none;
            padding: 15px 10px;
        }
        }
       
        
    }
    
} 
.button{
        padding: 15px 30px;
        border-radius: 25px;
        margin-top:25px ;
        display: block;
        background-color: #24cd89;
        
    }
.buttonBack{
     padding: 15px 30px;
        border-radius: 25px;
        margin-top:25px ;
        display: block;
        background-color: #000220;
}
    .escolha{
        display: flex;
        flex-direction: column;
    
        gap: 30px;
        .option{
            border: #1d1957 3px solid;
            padding: 20px 10px;
            border-radius: 20px;
            cursor: pointer;
            &:hover{
                border-color: #2f3260;
            }
        .emoji{
            background-color: #1d1957;
            padding: 10px;
            border-radius: 100%;
        }
        display: flex;
        gap:30px

    }
    }
   
    
`