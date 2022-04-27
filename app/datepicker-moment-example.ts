import { Component, Directive, forwardRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css'],
})
export class DatepickerMomentExample {
  // Datepicker takes `Moment` objects instead of `Date` objects.
  date = new FormControl(moment([2017, 0, 1]));
}

export const DATE_FORMAT_1 = {
  parse: {
    dateInput: 'MMMM',
  },
  display: {
    dateInput: 'MMMM',
    monthYearLabel: 'MMMM',
    dateA11yLabel: 'MMMM',
    monthYearA11yLabel: 'MMMM',
  },
};

export const DATE_FORMAT_2 = {
  parse: {
    dateInput: 'YYYY.MM.DD',
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Directive({
  selector: '[dateFormat1]',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_1 }],
})
export class CustomDateFormat1 {}

@Directive({
  selector: '[dateFormat2]',
  providers: [{ provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_2 }],
})
export class CustomDateFormat2 {}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
