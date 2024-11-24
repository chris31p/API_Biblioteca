//En el controlador se crean las funciones para manejar los libros

const {Biblioteca, libros} = require('../model/bibliotecaModel.js');

//CREATE
const crearLibro = (req, res) =>{
    console.log('Datos recibidos:', req.body);
    const {titulo, autor, genero, anio} = req.body;
    const id = libros.length + 1;
    const nuevoLibro = new Biblioteca(id, titulo, autor, genero, anio);
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};

//READ
const listarLibros = (req, res) =>{
    res.status(200).json(libros);
};

const obtenerLibroID = (req, res) =>{
    const id = parseInt(req.params.id);
    const libro = libros.find(l => l.id === id);
    if(libro){
        res.status(200).json(libro);
    } else {
        res.status(404).json({mensaje: 'Libro no encontrado!'})
    }
};

//UPDATE
const actualizarLibroID = (req, res) =>{
    const id = parseInt(req.params.id);
    const libro = libros.find(l => l.id === id);
    if(libro){
        const {titulo, autor, genero, anio} = req.body;
        libro.titulo = titulo || libro.titulo;
        libro.autor = autor || libro.autor;
        libro.genero = genero || libro.genero;
        libro.anio = anio || libro.anio;

        res.status(200).json({ mensaje: 'Libro actualizado', libro });
    } else {
        res.status(404).json({mensaje: 'Libro no encontrado!'})
    }
};

//DELETE
const eliminarLibroID = (req, res) =>{
    const id = parseInt(req.params.id);
    const indice = libros.findIndex(l => l.id === id);
    if(indice !== -1){
        const libroEliminado = libros.splice(indice, 1);
        res.json(libroEliminado[0]);
    } else{
        res.status(404).json({mensaje: 'Libro no encontrado'})
    }
};

// Filtros
const filtrarLibro = (req, res) => {
    console.log("Parámetros obtenidos:", req.query);
    const { id, titulo, autor, genero, anio } = req.query;

    // Mostrar los libros actuales en consola para verificar la información almacenada
    console.log("Libros en la base de datos:", libros);

    // Contar cuántos parámetros están presentes en la consulta
    const parametros = [id, titulo, autor, genero, anio].filter(param => param !== undefined);

    // Si hay más de un parámetro, devolver un error
    if (parametros.length !== 1) {
        return res.status(400).json({ msg: 'Por favor, proporciona solo un parámetro de filtro a la vez.' });
    }

    // Filtrar por el parámetro específico proporcionado
    const filtrado = libros.filter((libro) => {
        console.log("Comparando libro:", libro);  // Verificar los valores del libro en cada iteración

        if (id) {
            console.log("Comparando por ID");
            return libro.id === parseInt(id);
        }
        if (titulo) {
            console.log("Comparando por título:", libro.titulo.toLowerCase(), "===", titulo.toLowerCase());
            return libro.titulo.toLowerCase() === titulo.toLowerCase();
        }
        if (autor) {
            console.log("Comparando por autor:", libro.autor.toLowerCase(), "===", autor.toLowerCase());
            return libro.autor.toLowerCase() === autor.toLowerCase();
        }
        if (genero) {
            console.log("Comparando por género:", libro.genero.toLowerCase(), "===", genero.toLowerCase());
            return libro.genero.toLowerCase() === genero.toLowerCase();
        }
        if (anio) {
            console.log("Comparando por año:", libro.anio, "===", parseInt(anio));
            return libro.anio === parseInt(anio);
        }
        return false;
    });

    if (filtrado.length === 0) {
        return res.status(404).json({ mensaje: 'Libro no encontrado!' });
    }

    res.json({
        msg: 'Búsqueda filtrada con éxito!',
        data: filtrado,
    });
};



module.exports = {crearLibro, listarLibros, obtenerLibroID, actualizarLibroID, eliminarLibroID, filtrarLibro}