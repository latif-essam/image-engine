import supertest from "supertest";
import app from "./../index";
const req = supertest(app);

describe("Main Suite", async () => {
  it("Should display a response when visit / end-point amin route:", async () => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
  });
  it("Should redirect to invalid route when visiting wrong url", async () => {
    const res = await req.get("/api/lol");
    expect(res.status).toBe(302);
  });
  it("Should display info, when visiting /info route", async () => {
    const res = await req.get("/info");
    expect(res.status).toBe(200);
  });
});
