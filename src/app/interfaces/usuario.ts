export interface Usuario{
    username:string,
    email:string,
    tipo:string,
    admitido:string,
    rutas:number[];
    paradas:number[];
}

export interface UsuarioLogin{
    username:string,
    password:string
}

export interface UsuarioRegistro{
    username:string,
    password:string,
    email:string,
    tipo:string
}