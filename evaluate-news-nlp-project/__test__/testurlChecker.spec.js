import { isValidURL } from "../src/client/js/urlChecker";

describe("Testing the urlChecker functionality", () => {
  test("Testing the isValidURL() function", () => {
    expect(isValidURL).toBeDefined();
  });
});
