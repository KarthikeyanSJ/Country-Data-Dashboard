import request from "supertest";
import app from "../index";

describe("Country Routes", () => {
  it("should fetch all countries", async () => {
    const response = await request(app).get("/countries");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
