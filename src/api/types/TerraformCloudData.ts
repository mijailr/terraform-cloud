interface Data {
  id: string;
  type: string;
}

export interface Links {
  self?: string;
  related?: string;
}

export type Relationship = {
  data: Data;
  links: Links;
};

export type TerraformCloudData<Attributes> = Data & {
  attributes: Attributes;
  relationships?: [Relationship];
  links?: Links;
};
