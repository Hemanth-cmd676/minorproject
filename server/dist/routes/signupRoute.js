"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signupController_1 = require("../controllers/signupController");
const router = express_1.default.Router();
// Route to handle user signup
router.post('/', signupController_1.signup);
exports.default = router;
