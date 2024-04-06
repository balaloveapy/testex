'use client'
import { Fab, IconButton, Radio } from "@mui/material";
import { Aside } from "./layoutAside.styled";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmailIcon from '@mui/icons-material/Email';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useState } from "react";

export function LayoutAside() {
    const [radio, setradio] = useState('a')
    return (
        <Aside>
            <div className="separar">
                <div className="info"> 
                    <div className="width">
                        <h1>Pessoal</h1>
                        <p>se identifique</p>
                    </div>
                    <div className="button">
                        <Fab size="small" className="ball">
                            <TagFacesIcon sx={{ color: 'white' }} />
                        </Fab>
                    </div>
                    <div>
                        <Radio 
                        sx={{ color: '#484980' }}
                        checked={radio === 'a'}
                        onChange={() => setradio('a')}
                        />
                    </div>
                </div>
                <div className="info">
                    <div className="width">
                        <h1>Profissional</h1>
                        <p>seu nivel</p>
                    </div>
                    <div className="button">
                        <Fab size="small" className="ball">
                            <AutoStoriesIcon sx={{ color: 'white' }} />
                        </Fab>
                    </div>
                    <div>
                        <Radio
                            sx={{ color: '#484980' }}
                            checked={radio === 'b'}

                            onChange={() => setradio('b')}

                        />
                    </div>
                </div>
                <div className="info">
                    <div className="width">
                        <h1>Contatos</h1>
                        <p>Como te achar</p>
                    </div>
                    <div className="button">
                        <Fab size="small" className="ball">
                            <EmailIcon sx={{ color: 'white' }} />
                        </Fab>
                    </div>
                    <div>
                        <Radio
                            sx={{ color: '#484980' }}
                            checked={radio === 'c'}
                            onChange={() => setradio('c')}

                        />
                    </div>
                </div>

            </div>
        </Aside >
    )
}