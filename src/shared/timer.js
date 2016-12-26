// @flow

class Timer {
  enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  status(): string {
    return `My status is ${this.enabled.toString()}`;
  }

  statusInConsole() {
    /* eslint-disable no-console */
    console.log(this.status());
    /* eslint-enable no-console */
  }
}

export default Timer;
