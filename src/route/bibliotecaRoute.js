const express = require("express");
const router = express.Router();
const bibliotecaController = require("../controller/bibliotecaController.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     API_Biblioteca:
 *       type: object
 *       required:
 *         - titulo
 *       properties:
 *         titulo:
 *           type: string
 *           description: Titulo del libro
 *         autor:
 *           type: string
 *           description: Autor del libro
 *         genero:
 *           type: string
 *           description: Genero del libro
 *         anio:
 *           type: integer
 *           description: Año del libro
 *       ejemplo:
 *         id: 1
 *         titulo: La guerra de mundos
 *         autor: Pedro Sandoval
 *         genero: Ficcion
 *         anio: 1984
 */

/**
 * @swagger
 * tags:
 *   name: libros
 *   description: API para la gestión de libros en la biblioteca
 */

// Obtener un listado de todos los libros
/**
 * @swagger
 * /api/libros:
 *   get:
 *     summary: Listar todos los libros
 *     tags: [libros]
 *     responses:
 *       200:
 *         description: La lista de libros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/API_Biblioteca'
 */
router.get("/api/libros", bibliotecaController.listarLibros);

// Crear un nuevo libro
/**
 * @swagger
 * /api/libros:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [libros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/API_Biblioteca'
 *     responses:
 *       201:
 *         description: El libro fue creado exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Biblioteca'
 *       404:
 *         description: No se pudo crear el libro
 */
router.post("/api/libros", bibliotecaController.crearLibro);

// Obtener un libro por su ID
/**
 * @swagger
 * /api/libros/{id}:
 *   get:
 *     summary: Obtener un libro por su id
 *     tags: [libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingrese el ID del libro
 *     responses:
 *       200:
 *         description: Libro encontrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Biblioteca'
 *       404:
 *         description: Libro no encontrado!
 */
router.get("/api/libros/:id", bibliotecaController.obtenerLibroID);

// Actualizar información de un libro específico
/**
 * @swagger
 * /api/libros/{id}:
 *   put:
 *     summary: Actualizar un libro por su id
 *     tags: [libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingrese el ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/API_Biblioteca'
 *     responses:
 *       200:
 *         description: El libro fue actualizado!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Biblioteca'
 *       404:
 *         description: No se encontró el libro
 */
router.put("/api/libros/:id", bibliotecaController.actualizarLibroID);

// Eliminar un libro específico
/**
 * @swagger
 * /api/libros/{id}:
 *   delete:
 *     summary: Eliminar un libro por su id
 *     tags: [libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ingrese el ID del libro a eliminar
 *     responses:
 *       200:
 *         description: El libro fue eliminado exitosamente!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/API_Biblioteca'
 *       404:
 *         description: No existe este libro
 */
router.delete("/api/libros/:id", bibliotecaController.eliminarLibroID);

// Filtrar libros por parámetros
/**
 * @swagger
 * /api/libros/filtrar:
 *   get:
 *     summary: Filtrar libros por parámetros
 *     tags: [libros]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID del libro
 *       - in: query
 *         name: titulo
 *         schema:
 *           type: string
 *         description: Título del libro
 *       - in: query
 *         name: autor
 *         schema:
 *           type: string
 *         description: Autor del libro
 *       - in: query
 *         name: genero
 *         schema:
 *           type: string
 *         description: Género del libro
 *       - in: query
 *         name: anio
 *         schema:
 *           type: integer
 *         description: Año de publicación del libro
 *     responses:
 *       200:
 *         description: Lista de libros filtrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/API_Biblioteca'
 *       404:
 *         description: Libro no encontrado
 */
router.get("/api/libros/filtrar", bibliotecaController.filtrarLibro);

module.exports = router;

