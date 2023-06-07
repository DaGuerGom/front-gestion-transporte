export interface Usuario{
    username:string,
    email:string,
    tipo:string,
    admitido:string,
    rutas:number[];
}

export interface UsuarioLogin{
    username:string,
    password:string
}

//Diferencia con usuario: Tiene la contraseña. Esta interfaz solo se usará para enviar datos en el registro.
export interface UsuarioRegistro{
    username:string,
    password:string,
    email:string,
    tipo:string,
    admitido:string,
    rutas:number[];
}