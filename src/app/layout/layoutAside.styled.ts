import styled from "styled-components";

export const Aside = styled.aside`
    .separar{
        display: flex;
        flex-direction: column;
        gap: 35px;
        
        .info{
            .width{
                width: 100px;
            }
            text-align: right;
            display: flex;
            align-items: center;
            gap: 20px;
            .button{
                .ball{
                    background-color:#484980 ;
                }
            }
        }
    }
`