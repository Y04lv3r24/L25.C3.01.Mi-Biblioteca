import Cl_mLibro from "./Cl_mLibro.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarLibro({ libroData, callback, }) {
        this.modelo.agregarLibro({
            libro: new Cl_mLibro(libroData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    librosRegistrados() {
        return this.modelo.listar();
    }
}
