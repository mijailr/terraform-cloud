export const WorkspaceNoVcsRequest = {
  data: {
    attributes: {
      name: 'workspace-1',
    },
    type: 'workspaces',
  },
}

export const WorkspaceMock = {
  data: {
    id: 'ws-YnyXLq9fy38afEeb',
    type: 'workspaces',
    attributes: {
      'auto-apply': false,
      'allow-destroy-plan': false,
      'can-queue-destroy-plan': false,
      'created-at': '2017-11-18T00:43:59.384Z',
      environment: 'default',
      'file-triggers-enabled': true,
      locked: false,
      name: 'workspace-1',
      permissions: {
        'can-update': true,
        'can-destroy': false,
        'can-queue-destroy': false,
        'can-queue-run': false,
        'can-update-variable': false,
        'can-lock': false,
        'can-read-settings': true,
      },
      'queue-all-runs': false,
      'terraform-version': '0.11.0',
      'trigger-prefixes': [],
      'vcs-repo': null,
      'working-directory': '',
      'execution-mode': 'agent',
    },
    relationships: {
      organization: {
        data: {
          id: 'my-organization',
          type: 'organizations',
        },
      },
      'ssh-key': {
        data: null,
      },
      'latest-run': {
        data: null,
      },
      'agent-pool': {
        data: {
          id: 'apool-ZjT6A7mVFm5WHT5a',
          type: 'agent-pools',
        },
      },
    },
    links: {
      self: '/api/v2/organizations/my-organization/workspaces/workspace-1',
    },
  },
}
