import supertest from "supertest";
import app from "./../index";
const req = supertest(app);

describe("Main Suite", () => {
  it("Should display a response when visit / end-point amin route:", async () => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
  });
  it("Should redirect to invalid route when visiting wrong url", async () => {
    const res = await req.get("/api/lol");
    expect(res.status).toBe(302);
  });
  it("Should display info route when clicking info link", async () => {
    const res = await req.get("/info");
    expect(res.status).toBe(200);
  });
});
