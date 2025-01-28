import { test } from "../../../config/test-fixtures";
import { givenPet } from "../../../api/pet/data/pet";
import { PetDto } from "../../../api/pet/dto/pet-dto";
import { expect } from "@playwright/test";

test.describe("PET CREATE", () => {
  const PET_URL = "/v2/pet";

  test("pet can be added to the store", async ({ apiRequest }) => {
    const expectedPet = givenPet();

    const response = await apiRequest.post(PET_URL, { data: expectedPet });
    const actualPet: PetDto = await response.json();

    expect(response.status()).toBe(200);
    expect(actualPet).toEqual(expectedPet);
  });

  test("pet without name cannot be added to the store", async ({
    apiRequest,
  }) => {
    const expectedPet = givenPet();
    delete expectedPet.name;

    const response = await apiRequest.post(PET_URL, { data: expectedPet });

    expect(response.status()).toBe(400);
  });

  test("pet cannot be added without providing the data", async ({
    apiRequest,
  }) => {
    const response = await apiRequest.post(PET_URL);

    expect(response.status()).toBe(415);
  });
});
