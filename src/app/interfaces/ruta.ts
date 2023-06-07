export interface Ruta{
    id: number,
    nombre: string,
    horaSalida: string,
    horaLlegada: string
    usuarios: string[],
    paradas: number[],
    autobuses: number[],
    nombresParadas: string[],
    nombresAutobuses: string[]
}

export interface RutaSubmit{
    nombre: string,
    horaSalida: string,
    horaLlegada: string
    usuarios: string[],
    paradas: number[],
    autobuses: number[]
}