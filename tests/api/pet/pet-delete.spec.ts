import { test } from "../../../config/test-fixtures";
import { givenPet } from "../../../api/pet/data/pet";
import { PetDto } from "../../../api/pet/dto/pet-dto";
import { expect } from "@playwright/test";
import { ErrorDto } from "../../../api/error/dto/error-dto";

test.describe("PET DELETE", () => {
  const PET_URL = "/v2/pet";

  let addedPet: PetDto;

  test.beforeEach(async ({ apiRequest }) => {
    const response = await apiRequest.post(PET_URL, { data: givenPet() });
    addedPet = await response.json();
  });

  test(
    "pet can be deleted from the store",
    { tag: "@api" },
    async ({ apiRequest }) => {
      const { id } = addedPet;
      const expectedError: ErrorDto = {
        code: 1,
        type: "error",
        message: "Pet not found",
      };

      let response = await apiRequest.delete(`${PET_URL}/${id}`);
      expect(response.status()).toBe(200);

      response = await apiRequest.get(`${PET_URL}/${id}`);
      const actualError: ErrorDto = await response.json();

      expect(response.status()).toBe(404);
      expect(actualError).toEqual(expectedError);
    },
  );

  test(
    "404 is thrown if trying to delete non-existent pet",
    { tag: "@api" },
    async ({ apiRequest }) => {
      const fakeId = 0;

      const response = await apiRequest.delete(`${PET_URL}/${fakeId}`);

      expect(response.status()).toBe(404);
    },
  );
});
