export interface Parada{
    id:number,
    nombre:string,
    rutas:number[],
    usuarios:string[];
}

export interface ParadaSubmit{
    nombre:string,
    rutas:number[],
    usuarios:string[],
}