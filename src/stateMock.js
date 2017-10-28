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
  },
});

export default stateMock;
