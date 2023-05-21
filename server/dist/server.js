"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 8000;
app.get('/', (req, res) => {
    res.send('Hello Ace yo king');
});
app.get('/hi', (req, res) => {
    res.send('Hello Ace yo by111111eeee');
});
server.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});
//# sourceMappingURL=server.js.map