export const LOGA_USUARIO = 'LOGA_USUARIO'
export const DESLOGA_USUARIO = 'DESLOGA_USUARIO'

data={
    usuario1={
        logado:true,
        tipo: usuaria,
    },

    usuario2={
        logado:true,
        tipo: empresa,
    }
}

export function logaUsuario() {
    return {
        type: LOGA_USUARIO,
    }
}

export function deslogaUsuario() {
    return {
        type: DESLOGA_USUARIO,
    }
}