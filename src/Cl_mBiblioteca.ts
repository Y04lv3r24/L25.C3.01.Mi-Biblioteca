import Cl_mLibro, { iLibro } from "./Cl_mLibro.js";

export default class Cl_mBiblioteca {
  private biblioteca: Cl_mLibro[] = [];
  agregarLibro({
    libro,
    callback,
  }: {
    libro: Cl_mLibro;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el libro no tenga errores
    let error = libro.error();
    if (error) {
      callback(error);
      return;
    }
    // Validar que no se repita los libros con el mismo código
    let existe = this.biblioteca.find((c) => c.código === libro.código);
    if (existe) {
      callback("El número de código del libro ya está registrado.");
      return;
    }
    this.biblioteca.push(libro);
    callback(false);
  }
  listar(): iLibro[] {
    let lista: iLibro[] = [];
    this.biblioteca.forEach((libro) => {
      lista.push(libro.toJSON());
    });
    return lista;
  }
}
