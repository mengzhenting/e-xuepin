const mock_data = require("./mock/test.json")
module.exports = {
    configureWebpack: {
        devtool: "source-map"
    },
    devServer: {
        port: 3333,
        before: function (app) {
            app.get('/api/getList', (req, res) => {
                res.json({
                    name: '刘瑞'
                })
            })
        }
    }
}