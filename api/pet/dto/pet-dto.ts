export interface PetDto {
  id?: number;
  category?: PetCategoryDto;
  name?: string;
  photoUrls?: string[];
  tags?: PetTagDto[];
  status?: PetStatus;
}

export interface PetCategoryDto {
  id?: number;
  name?: string;
}

export interface PetTagDto {
  id?: number;
  name?: string;
}

export type PetStatus = "available" | "pending" | "sold";