import { TerraformCloudData, Relationship } from "./TerraformCloudData";

export type Run = TerraformCloudData<RunAttributes> & {
  relationships: RunRelationship;
};

export interface RunRelationship {
  plan: Relationship;
  "created-by": Relationship;
  "confirmed-by": Relationship;
}

export interface RunAttributes {
  "auto-apply": boolean;
  "error-text": null | string;
  "is-destroy": boolean;
  message: string;
  source: string;
  status: string;
  "terraform-version": string;
  "created-at": Date;
  "has-changes": boolean;
}
