const fake = require("faker");
const User = require("../../src/models/User");

describe("User Model", () => {
  describe("Validation for user", () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        email: fake.internet.email().toLowerCase(),
        fullname: fake.name.findName(),
        username: fake.name.findName(),
        password: "password123",
      };
    });

    test("Correctly validate a valid user", async () => {
      await expect(new User(newUser).validate()).resolves.toBeUndefined();
    });

    test('Throw a validation error if password length is less than 6 characters', async () => {
      newUser.password = 'pass';
      await expect(new User(newUser).validate()).rejects.toThrow();
    });

  });
});
