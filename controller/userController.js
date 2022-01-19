const db = require('../connection/connection');

module.exports = {
    getAll: async (req, res) => {
        await db
            .select()
            .from('tb_users')
            .then(data => {
                return res.json({
                    status: true,
                    message: 'data berhasil diambil',
                    data
                })
            })
            .catch(error => {
                return res.status(400).json({
                    status: false,
                    message: error.message
                })
            })
    },
    addUser: async (req, res) => {
        const { nama, email } = req.body;

        await db('tb_users')
            .insert({
                nama, email
            })
            .then(() => {
                return res.status(201).json({
                    status: true,
                    message: 'data berhasil ditambahkan',
                    data: {
                        nama, email
                    }
                })
            })
            .catch(error => {
                return res.status(400).json({
                    status: false,
                    message: error.message
                })
            })
    }
}