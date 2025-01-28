import { PetCategoryDto, PetDto, PetTagDto } from "../dto/pet-dto";

export const givenPetCategory = (): PetCategoryDto => {
  return {
    id: 1,
    name: "dogs",
  };
};

export const givenPetTag = (): PetTagDto => {
  return {
    id: 1,
    name: "friendly",
  };
};

export const givenPet = (): PetDto => {
  return {
    id: 1,
    category: givenPetCategory(),
    name: "Bobby",
    photoUrls: ["https://example.com/bobby.jpg"],
    tags: [givenPetTag()],
    status: "available",
  };
};
