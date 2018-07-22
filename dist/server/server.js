"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
//clase que puede ser usada en otros archivos
//sera importada por defecto
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    static init(port) {
        return new Server(port);
    }
    publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
    start(callback) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}
exports.default = Server;
