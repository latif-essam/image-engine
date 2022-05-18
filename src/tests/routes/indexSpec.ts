import supertest from "supertest";
import app from "../../index";

const req = supertest(app);

describe("Helpers Suite", () => {
  it("Should display Instuctions when visit /api/engine end-point route:", async () => {
    const res = await req.get("/api/engine");
    expect(res.status).toBe(200);
  });
});
