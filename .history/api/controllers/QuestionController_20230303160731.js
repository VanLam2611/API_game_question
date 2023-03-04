'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
const { stringify } = require('querystring')

const table = 'questions'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM questions'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getType: (req, res) => {
        let sql = 'SELECT * FROM type_question'
        db.query(sql,  (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    showQuestionByid: (req, res) => {
        let sql = "SELECT * FROM `questions`,`type_question` WHERE `questions`.`type_id` = `type_question`.`type_id` && `type_question`.`type_id` = ?"
        db.query(sql, [req.params.typeId], (err, response) => {
            if (err) throw err
            res.json(response[0] + req.params.typeId)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE questions SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO `questions`( `name`, `point`, `correct`, `wrong`) VALUES ( '" + data.name + "', 0, 0, 0 )"
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM questions WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}