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
            res.json(response)
        })
    },
    getQuestionById: (req, res) => {
        let sql = "SELECT * FROM `questions` WHERE `questions`.`id` = ?"
        db.query(sql, [req.params.quesId], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    
}