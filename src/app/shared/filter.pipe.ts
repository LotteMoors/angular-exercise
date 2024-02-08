import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], filterProperty: string[], filter: string): any[] {
    const filterValue = filter.toLowerCase();

    if (filterValue) {
      const filtered: any[] = [];
      data.map((item) =>
        filterProperty.forEach((prop) => {
          if (item[prop].toLowerCase().includes(filterValue)) {
            filtered.push(item);
          }
        })
      );
      return filtered;
    }
    return data;
  }
}
