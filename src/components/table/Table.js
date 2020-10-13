import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {isResize, resize} from '@/components/table/table.resize';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  onMousedown(event) {
    if (isResize(event)) {
      resize(this.$root, event);
    }
  }

  toHTML() {
    return createTable(20);
  }
}
