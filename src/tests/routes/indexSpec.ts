import supertest from "supertest";
import app from "../../index";

const req = supertest(app);

describe("API routes endpoint", () => {
  it("Should display a response when visit /api end-point route:", async () => {
    const res = await req.get("/api");
    expect(res.status).toBe(200);
  });
});
