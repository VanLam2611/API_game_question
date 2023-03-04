'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
const { stringify } = require('querystring')

const table = 'player'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM player'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE products SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO `player`( `name`, `point`, `correct`, `wrong`) VALUES ( '" + req.body['name'] + "', 0, 0, 0 )"
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success! '+ JSON.stringify(req.body)})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}