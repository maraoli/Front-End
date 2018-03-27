export const LOGA_USUARIO = 'LOGA_USUARIO'
export const DESLOGA_USUARIO = 'DESLOGA_USUARIO'

data={
    usuario1:{
        logado:true,
        tipo: "usuaria",
    },

    usuario2:{
        logado:true,
        tipo: "empresa",
    }
}

export function setLocalStore() {
    return dispatch => {
        getNotes()
            .then(response => dispatch({
                localStorage.setItem('usuario', JSON.stringify(response.data))
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
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