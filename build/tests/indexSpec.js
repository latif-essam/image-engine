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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./../index"));
const req = (0, supertest_1.default)(index_1.default);
describe("Main Suite", () => {
    it("Should display a response when visit / end-point amin route:", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get("/");
        expect(res.status).toBe(200);
    }));
    it("Should redirect to invalid route when visiting wrong url", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get("/api/lol");
        expect(res.status).toBe(302);
    }));
    it("Should display info route when clicking info link", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield req.get("/info");
        expect(res.status).toBe(200);
    }));
});
