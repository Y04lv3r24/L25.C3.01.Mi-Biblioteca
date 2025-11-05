/**
* Se requiere de una pequeña aplicación que controle una biblioteca
* personal, permitiendo registrar los datos de los libros:
* título, autor, año de publicación y código ISBN.
* Reglas para validar los datos:
* -El título no puede estar vacío y debe tener al menos 3 caracteres.
* -El título del autor debe contener al menos un título y un apellido, separados por espacio.
* -El año de publicación debe estar entre 1900 y el año actual.
* -El código ISBN debe tener exactamente 13 dígitos numéricos y comenzar con 978 o 979.
* La APP debe permitir agregar y listar los libros registrados.
* -No se pueden registrar dos libros con el mismo código ISB.
* Ejemplo: ABC Mario Bautista 1960 9786543211234
*/
import Cl_controlador from "./Cl_controlador.js";
import Cl_mBiblioteca from "./Cl_mBiblioteca.js";
import Cl_vBiblioteca from "./Cl_vBiblioteca.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mBiblioteca();
        this.vista = new Cl_vBiblioteca();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
