export interface PetDto {
  id?: number;
  category?: PetCategory;
  name?: string;
  photoUrls?: string[];
  tags?: PetTag[];
  status?: PetStatus;
}

export interface PetCategory {
  id?: number;
  name?: string;
}

export interface PetTag {
  id?: number;
  name?: string;
}

export type PetStatus = "available" | "pending" | "sold";