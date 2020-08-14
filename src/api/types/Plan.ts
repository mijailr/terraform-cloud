import { TerraformCloudData, Relationship } from "./TerraformCloudData";

export type Plan = TerraformCloudData<PlanAttributes> & {
  relationships: PlanRelationship;
};

interface PlanRelationship {
  'state-versions': Relationship
}

interface PlanAttributes {
  "has-changes": boolean;
  "resource-additions": number;
  "resource-changes": number;
  "resource-destructions": number;
  status: string;
  "status-timestamps": PlanTimestamps;
  "log-read-url": string;
}

interface PlanTimestamps {
  "queued-at": Date;
  "pending-at": Date;
  "started-at": Date;
  "finished-at": Date;
}
