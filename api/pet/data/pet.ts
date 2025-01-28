import { PetCategory, PetDto, PetTag } from "../dto/pet-dto";

export const givenPetCategory = (): PetCategory => {
  return {
    id: 1,
    name: "dogs"
  }
}

export const givenPetTag = (): PetTag => {
  return {
    id: 1,
    name: "friendly"
  }
}

export const givenPet = (): PetDto => {
  return {
    id: 1,
    category: givenPetCategory(),
    name: "Bobby",
    photoUrls: ["https://example.com/bobby.jpg"],
    tags: [givenPetTag()],
    status: "available"
  }
}
