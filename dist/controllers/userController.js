"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserProfile = exports.getUserProfile = exports.loginUser = exports.registerUser = void 0;
// Handle errors
const handleError = (res, err) => {
    if (err instanceof Error) {
        res.status(500).json({ error: err.message });
    }
    else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
};
// Example controller methods
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Your code for registering a user
    }
    catch (err) {
        handleError(res, err);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Your code for logging in a user
    }
    catch (err) {
        handleError(res, err);
    }
});
exports.loginUser = loginUser;
const getUserProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // Ensure `req.user` is set by your middleware
        // Your code to get user profile
    }
    catch (err) {
        handleError(res, err);
    }
});
exports.getUserProfile = getUserProfile;
const updateUserProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // Ensure `req.user` is set by your middleware
        // Your code to update user profile
    }
    catch (err) {
        handleError(res, err);
    }
});
exports.updateUserProfile = updateUserProfile;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // Ensure `req.user` is set by your middleware
        // Your code to delete user
    }
    catch (err) {
        handleError(res, err);
    }
});
exports.deleteUser = deleteUser;
