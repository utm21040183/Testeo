import { Modelo } from "../models/alumnos.model.js";

Modelo.create({
    Name:"Rodolfo",
    Edad:25
})

export const test = ()=>{
    console.log("Funciona el controlador")
}