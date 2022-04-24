import React, { useEffect } from 'react';

interface UploadPros{
    apiPath: string;
    whoAsked: string;

}

export const Upload: React.FC<UploadPros> =(apiPath,whoAsked)=>{

    const uploadImagenPerfil = ()=>{

    }
    const uploadImagensProdutos =()=>{

    }

    useEffect(()=>{
        if(whoAsked==="root"){
            uploadImagenPerfil()
        }else if(whoAsked==="cliete"){
            uploadImagensProdutos()
        }
    },[])

    return (
        <div>
            ok
        </div>
    )
}