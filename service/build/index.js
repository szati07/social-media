"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 3001;
app.get('/', (req, res) => res.send('Express + TS Server is awesome'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running  as pfjapfijae at https://localhost:${PORT} !!`);
});
