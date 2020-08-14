import nock from "nock";
import TerraformCloudApi from "../../src/api/TerraformCloudApi";
import AccountMock from "../mocks/AccountMock";
import RunMock from "../mocks/RunMock";

const client = new TerraformCloudApi("any-key");

describe("Api requests", () => {
  describe("Account", () => {
    it("returns Account information from a valid ID", async (done) => {
      const scope = nock("https://app.terraform.io/api/v2")
        .get("/account/details")
        .once()
        .reply(200, AccountMock);

      const account = await client.getAccount();
      expect(account.id).toBe("user-zzAm6GKzCMMTB5dR");
      scope.done();
      done();
    });

    it("returns a reject when not logged in", async (done) => {
      const scope = nock("https://app.terraform.io/api/v2")
        .get("/account/details")
        .once()
        .reply(403);

      await client.getAccount().catch((error) => {
        expect(error.response.status).toBe(403);
      });
      scope.done();
      done();
    });
  });

  describe("Runs", () => {
    it("return a run details", async (done) => {
      const runId = "run-id";
      const scope = nock("https://app.terraform.io/api/v2")
        .get(`/runs/${runId}`)
        .once()
        .reply(200, RunMock);
      const run = await client.getRun(runId);

      expect(run.attributes["has-changes"]).toBe(true);
      scope.done();
      done();
    });
  });
});
