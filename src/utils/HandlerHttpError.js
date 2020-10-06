

const UNAUTHORIZED_HTTP_RESPONSE = { "code": 401, "msg": "Acesso não autorizado"}
const FORBIDDEN_HTTP_RESPONSE = { "code": 403, "msg": "Acesso proibido"}
const NOT_FOUND_HTTP_RESPONSE = { "code": 401, "msg": "Recurso não encontrado"}


export default function HandlerHttpError(error) {

    if(error.response.status === 401) {              
        throw UNAUTHORIZED_HTTP_RESPONSE;
    }
    else if(error.response.status === 403) {              
        throw FORBIDDEN_HTTP_RESPONSE;
    }
    else if(error.response.status === 404) {              
        throw NOT_FOUND_HTTP_RESPONSE;
    }
    
}