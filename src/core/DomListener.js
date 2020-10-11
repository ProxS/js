import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw Error(`No $root provider`);
    }
    this.listeners = listeners;
    this.$root = $root;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const methodName = getMethodName(listener);
      if (!this[methodName]) {
        const name = this.name || '';
        throw new Error(
            `Method ${methodName} not implemented in component ${name}`);
      }
      this[methodName] = this[methodName].bind(this);

      this.$root.on(listener, this[methodName]);
    });
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const methodName = getMethodName(listener);

      this.$root.off(listener, this[methodName]);
    });
  }
}

function getMethodName(eventName) {
  const methodName = 'on' + capitalize(eventName);

  return methodName;
}
