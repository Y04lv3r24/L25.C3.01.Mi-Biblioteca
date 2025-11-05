import { iLibro } from "./Cl_mLibro.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vBiblioteca extends Cl_vGeneral {
  private btagregarLibro: HTMLButtonElement;
  private divlibrosRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "biblioteca" });
    this.btagregarLibro = this.crearHTMLButtonElement("btagregarLibro", {
      onclick: () => this.agregarLibro(),
    });
    this.divlibrosRegistrados = this.crearHTMLElement(
      "divlibrosRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.mostrarLibrosRegistrados(),
      }
    ) as HTMLDivElement;
  }
  mostrarLibrosRegistrados() {
    this.divlibrosRegistrados.innerHTML = "";
    let biblioteca = this.controlador?.librosRegistrados();
    if (!biblioteca) return;
    biblioteca.forEach((libro: iLibro) => {
      this.divlibrosRegistrados.innerHTML += `<tr>
            <td>${libro.título}</td>
            <td>${libro.autor}</td>
            <td>${libro.año}</td>
            <td>${libro.código}</td>
        </tr>`;
    });
  }
  agregarLibro() {
    let título = prompt("Ingrese el título del libro:");
    if (!título) return;
    let autor = prompt("Ingrese el autor:");
    if (!autor) return;
    let año = prompt("Ingrese el año:");
    if (!año) return;
    let código = prompt("Ingrese el código ISBN:");
    if (!código) return;
    this.controlador!.agregarLibro({
      libroData: {
        título: título,
        autor: autor,
        año: año,
        código: código,
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
