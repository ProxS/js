export class DomListener {
  constructor($root, options) {
    if (!$root) {
      throw Error(`No $root provider`);
    }

    this.$root = $root;
  }

  initDOMListeners() {}

  removeDOMListeners() {}
}
