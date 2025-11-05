export default class {
    constructor({ título, autor, año, código, }) {
        this._título = "";
        this._autor = "";
        this._año = "";
        this._código = "";
        this.título = título;
        this.autor = autor;
        this.año = año;
        this._código = código.trim();
    }
    set título(título) {
        this._título = título.trim().toUpperCase();
    }
    get título() {
        return this._título;
    }
    set autor(autor) {
        this._autor = autor.trim();
    }
    get autor() {
        return this._autor;
    }
    set año(año) {
        this._año = año.trim().toLowerCase();
    }
    get año() {
        return this._año;
    }
    set código(código) {
        this._código = código.trim();
    }
    get código() {
        return this._código;
    }
    error() {
        // Validar título
        if (this._título.length < 3)
            return "El título debe tener al menos 3 caracteres.";
        // Validar autor
        let partes = this._autor.split(" ");
        if (partes.length < 2)
            return "El autor debe contener al menos un nombre y un apellido.";
        // Validar año
        let añoNum = +this._año;
        let añoActual = new Date().getFullYear();
        if (isNaN(añoNum) || añoNum < 1900 || añoNum > añoActual)
            return `El año de publicación debe estar entre 1900 y ${añoActual}.`;
        // Validar código ISBN
        const código = ["978", "979"];
        if (this._código.length !== 13 ||
            !código.includes(this._código.substring(0, 3)) ||
            isNaN(+this._código)) {
            return "El código ISBN es inválido";
        }
        return false;
    }
    toJSON() {
        return {
            título: this._título,
            autor: this._autor,
            año: this._año,
            código: this._código,
        };
    }
}
