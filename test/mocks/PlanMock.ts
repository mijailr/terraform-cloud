export const PlanMock = {
  data: {
    id: 'plan-id',
    type: 'plans',
    attributes: {
      'has-changes': true,
      'resource-additions': 0,
      'resource-changes': 1,
      'resource-destructions': 0,
      status: 'finished',
      'status-timestamps': {
        'queued-at': '2018-07-02T22:29:53+00:00',
        'pending-at': '2018-07-02T22:29:53+00:00',
        'started-at': '2018-07-02T22:29:54+00:00',
        'finished-at': '2018-07-02T22:29:58+00:00',
      },
      'log-read-url':
        'https://archivist.terraform.io/v1/object/dmF1bHQ6djE6OFA1eEdlSFVHRSs4YUcwaW83a1dRRDA0U2E3T3FiWk1HM2NyQlNtcS9JS1hHN3dmTXJmaFhEYTlHdTF1ZlgxZ2wzVC9kVTlNcjRPOEJkK050VFI3U3dvS2ZuaUhFSGpVenJVUFYzSFVZQ1VZYno3T3UyYjdDRVRPRE5pbWJDVTIrNllQTENyTndYd1Y0ak1DL1dPVlN1VlNxKzYzbWlIcnJPa2dRRkJZZGtFeTNiaU84YlZ4QWs2QzlLY3VJb3lmWlIrajF4a1hYZTlsWnFYemRkL2pNOG9Zc0ZDakdVMCtURUE3dDNMODRsRnY4cWl1dUN5dUVuUzdnZzFwL3BNeHlwbXNXZWRrUDhXdzhGNnF4c3dqaXlZS29oL3FKakI5dm9uYU5ZKzAybnloREdnQ3J2Rk5WMlBJemZQTg',
    },
    relationships: {
      'state-versions': {
        data: [],
      },
    },
    links: {
      self: '/api/v2/plans/plan-id',
      'json-output': '/api/v2/plans/plan-id/json-output',
    },
  },
}
