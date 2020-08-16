import { RunRequest } from '../../src/types/Run'
export const RunMock = {
  data: {
    id: 'run-ybWY3ADtDx4YNaph',
    type: 'runs',
    attributes: {
      actions: {
        'is-cancelable': false,
        'is-confirmable': false,
        'is-discardable': false,
        'is-force-cancelable': false,
      },
      'canceled-at': null,
      'created-at': '2020-08-12T05:43:45.999Z',
      'has-changes': true,
      'is-destroy': true,
      message: 'Queued manually to destroy infrastructure',
      'plan-only': false,
      source: 'tfe-ui',
      'status-timestamps': {
        'applied-at': '2020-08-12T05:45:55+00:00',
        'planned-at': '2020-08-12T05:44:23+00:00',
        'applying-at': '2020-08-12T05:45:11+00:00',
        'planning-at': '2020-08-12T05:43:54+00:00',
        'confirmed-at': '2020-08-12T05:45:10+00:00',
        'plan-queued-at': '2020-08-12T05:43:54+00:00',
        'apply-queued-at': '2020-08-12T05:45:10+00:00',
        'plan-queueable-at': '2020-08-12T05:43:54+00:00',
      },
      status: 'applied',
      'trigger-reason': 'manual',
      'target-addrs': null,
      permissions: {
        'can-apply': false,
        'can-cancel': false,
        'can-comment': true,
        'can-discard': false,
        'can-force-execute': false,
        'can-force-cancel': false,
        'can-override-policy-check': false,
      },
    },
    relationships: {
      workspace: { data: [Object] },
      apply: { data: [Object], links: [Object] },
      'configuration-version': { data: [Object], links: [Object] },
      'confirmed-by': { data: [Object], links: [Object] },
      'created-by': { data: [Object], links: [Object] },
      plan: { data: [Object], links: [Object] },
      'run-events': { data: [Array], links: [Object] },
      'policy-checks': { data: [], links: [Object] },
      comments: { data: [Array], links: [Object] },
    },
    links: { self: '/api/v2/runs/run-ybWY3ADtDx4YNaph' },
  },
}

export const RunRequestMock = {
  data: {
    attributes: {
      'is-destroy': false,
      message: 'Custom message',
      'target-addrs': ['example.resource_address'],
    },
    type: 'runs',
    relationships: {
      workspace: {
        data: {
          type: 'workspaces',
          id: 'ws-LLGHCr4SWy28wyGN',
        },
      },
      'configuration-version': {
        data: {
          type: 'configuration-versions',
          id: 'cv-n4XQPBa2QnecZJ4G',
        },
      },
    },
  },
} as RunRequest
