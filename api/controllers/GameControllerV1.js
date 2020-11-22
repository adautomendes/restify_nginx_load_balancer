const axios = require("axios");
const core = axios.create({
    baseURL: "http://core:5000/core/v1"
});

module.exports = {
    create: (req, res) => {
        let url = `/game`
        let body = req.body;
        let options = {
            headers: req.headers
        }

        core.post(url, body, options)
            .then(response => {
                return res.json(response.status, response.data);
            })
            .catch(error => {
                return res.json(error.response.status, error.response.data);
            });
    },
    update: (req, res) => {
        let url = `/game/${req.params.id}`
        let body = req.body;
        let options = {
            headers: req.headers
        }

        core.patch(url, body, options)
            .then(response => {
                return res.json(response.status, response.data);
            })
            .catch(error => {
                return res.json(error.response.status, error.response.data);
            });
    },
    search: (req, res) => {
        let url = `/game`
        let id = req.query.id;
        let options = {
            headers: req.headers
        }

        if (id) {
            url += `?id=${id}`
        }

        core.get(url, options)
            .then(response => {
                return res.json(response.status, response.data);
            })
            .catch(error => {
                return res.json(error.response.status, error.response.data);
            });
    },
    remove: (req, res) => {
        let url = `/game/${req.params.id}`
        let options = {
            headers: req.headers
        }

        core.delete(url, options)
            .then(response => {
                return res.json(response.status, response.data);
            })
            .catch(error => {
                return res.json(error.response.status, error.response.data);
            });
    }
}