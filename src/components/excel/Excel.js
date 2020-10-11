import {$} from '@core/Dom';

export class Excel {
  constructor(selector, options = {}) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map(Component => {
      const $wrapper = $.create('div', Component.className);
      const component = new Component($wrapper);
      $wrapper.html(component.toHTML());
      $root.append($wrapper);

      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());

    this.components.forEach(component => component.init());
  }
}
