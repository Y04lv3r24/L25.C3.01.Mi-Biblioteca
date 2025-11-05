import Cl_mLibro, { iLibro } from "./Cl_mLibro.js";
import Cl_mBiblioteca from "./Cl_mBiblioteca.js";
import Cl_vBiblioteca from "./Cl_vBiblioteca.js";

export default class Cl_controlador {
  public modelo: Cl_mBiblioteca;
  public vista: Cl_vBiblioteca;
  constructor(modelo: Cl_mBiblioteca, vista: Cl_vBiblioteca) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarLibro({
    libroData,
    callback,
  }: {
    libroData: iLibro;
    callback: Function;
  }): void {
    this.modelo.agregarLibro({
      libro: new Cl_mLibro(libroData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  librosRegistrados(): iLibro[] {
    return this.modelo.listar();
  }
}
