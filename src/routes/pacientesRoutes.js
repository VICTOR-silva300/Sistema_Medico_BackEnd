const express = require('express')

const router = express.Router()

const controller = require('../controllers/pacientesController')

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Gerenciamento de pacientes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - dataNascimento
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         cpf:
 *           type: string
 *         dataNascimento:
 *           type: string
 *           format: date-time
 *         telefone:
 *           type: string
 *         email:
 *           type: string
 *         endereco:
 *           type: string
 *         criadoEm:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Pacientes]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 */
router.get('/', controller.listar)

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Busca paciente por ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente encontrado
 */
router.get('/:id', controller.buscarPorId)

/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Cria um paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente criado
 */
router.post('/', controller.criar)

/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualiza paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       200:
 *         description: Paciente atualizado
 */
router.put('/:id', controller.atualizar)

/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Deleta paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente deletado
 */
router.delete('/:id', controller.deletar)

module.exports = router