export interface Data {
  id: string
  type: string
}

export interface Links {
  self?: string
  related?: string
  jsonOutput?: string
}

export type Relationship = {
  data: Data
  links: Links
}

export type TerraformCloudData<Attributes> = Data & {
  attributes: Attributes
  relationships?: [Relationship]
  links?: Links
}

export type Page = {
  number: number
  size: number
}

export interface Params<T, Attributes> {
  data: {
    type: T
    attributes: Attributes
  }
}
