import supertest from "supertest";
import app from "../../../index";

const req = supertest(app);

describe("API routes/engine endpoint", () => {
  it("Should display a response when visit /engine end-point route:", async () => {
    const res = await req.get("/api/engine");
    expect(res.status).toBe(200);
  });

  it("Resizer >> Should resize image when providing filename, width, and height of an image", async () => {
    const res = await req.get(
      "/api/engine/resizer?filename=autom&width=400&height=650"
    );
    expect(res.status).toBe(200);
  });

  it("Rotator >> Should rotate image when providing filename,and angle", async () => {
    const res = await req.get("/api/engine/rotator?filename=autom&angle=180");
    expect(res.status).toBe(200);
  });

  it("Holder >> Should display placeholder image when providing width and height", async () => {
    const res = await req.get("/api/engine/holder?width=400&height=250");
    expect(res.status).toBe(200);
  });
});
