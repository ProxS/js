import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
    });
  }

  onInput(event) {
    console.log('input:', event.target.value);
  }

  onClick(event) {
    console.log('click:', event.target);
  }

  toHTML() {
    return `<input type="text" class="input" value="new table">

            <div>

                <div class="button">
                        <span class="material-icons">
                            delete_outline
                        </span>
                </div>

                <div class="button">
                        <span class="material-icons">
                            exit_to_app
                        </span>
                </div>

            </div>`;
  }
}
