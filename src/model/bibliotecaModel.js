class Biblioteca {
    constructor(id, titulo, autor, genero, anio){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anio = anio;
    }
}

const libros = [];

module.exports = {Biblioteca, libros};