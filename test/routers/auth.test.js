const request = require("supertest");
const fake = require("faker");
const httpStatus = require("http-status");

const { app } = require("../../src/app");
const User = require("../../src/models/User");

describe("Authentication Endpoints", () => {
  let user;

  beforeEach(async () => {
    user = {
      username: fake.name.findName(),
      password: "password123",
    };

    await User.deleteMany({});
  });

  test("Sign up for a user", () => {
    return request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .expect("Content-Type", /json/)
      .expect(httpStatus.CREATED)
      .then((res) => {
        expect(res.statusCode).toEqual(httpStatus.CREATED);
      });
  });
});

describe("GET /", () => {
  it("Return appropriate status code", (done) => {
    request(app).get("/").expect(404, done);
  });
});
