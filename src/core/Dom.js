class Dom {
  constructor(selector) {
    this.$el = selector === 'string'?document.querySelector(selector):selector;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const $el = document.createElement(tagName);

  if (classes) {
    $el.classList.add(classes);
  }

  return $($el);
};
