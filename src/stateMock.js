const stateMock = Object.freeze({
  app: {
    resizer: {
      dimensions: {
        width: 320,
        height: 568,
      },
    },
    topBar: {
      menuOpen: false,
    },
  },
  components: {
    modal: {},
  },
  scenes: {
    dashboard: {
      addTask: {
        name: {
          hasChanged: false,
          value: '',
          isValid: false,
        },
        description: '',
        timeRequired: 25,
        timeMode: false,
        isSaving: false,
      },
    },
  },
  data: {
    settings: {
      isFetching: false,
      isSaving: false,
      target: {
        working: 25,
        resting: 5,
      },
      pauseBetween: false,
      confirmEndingTask: true,
    },
    tasks: {
      pending: {
        list: [],
        page: 1,
        perPage: 25,
      },
      finished: {
        list: [],
        page: 1,
        perPage: 25,
      },
    },
  },
});

export default stateMock;
