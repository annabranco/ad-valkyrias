import React from 'react';
import { CalendarFrame } from './Calendar.styles';

const BASE_URL = 'https://calendar.google.com/calendar/embed';
const OPTIONS =
  'ctz=Europe%2FMadrid&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=MONTH';

const LIGHT_GREEN = '%237CB342';
const BRIGHT_GREEN = '%23b0ffc5';
const YELLOW = '%23E4C441';
const DARK_GREEN = '%230B8043';
const GREEN = '%237CB342';
const LIGHT_BLUE = '%23039BE5';
const BROWN = '%23A79B8E';
const DARK_BLUE = '%233F51B5';

const FRIENDLIES = 'NXJxMjQ5ajkzNzE2MGVvbGswaTcyaGg4OG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
const FRIENDLIES_COLOR = LIGHT_GREEN;

const GENERAL = 'dWQudmFsa3lyaWFzQGdtYWlsLmNvbQ';
const GENERAL_COLOR = BRIGHT_GREEN;

const HOLIDAYS = 'ZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20';
const HOLIDAYS_COLOR = YELLOW;

const MATCHES = 'YzF0MTVkM2t1cGVwYmU5NHMybDRmb25lY2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
const MATCHES_COLOR = DARK_GREEN;

const TRAINING = 'a3MxN3E2a3RrZXEybWtha3Vua2dvNXFjbGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
const TRAINING_COLOR = DARK_BLUE;

const Calendar = () => (
  <CalendarFrame
    src={`${BASE_URL}?height=600&wkst=2&bgcolor=${DARK_GREEN}&${OPTIONS}&src=${FRIENDLIES}&src=${GENERAL}&src=${HOLIDAYS}&src=${MATCHES}&src=${TRAINING}&color=${FRIENDLIES_COLOR}&color=${GENERAL_COLOR}&color=${HOLIDAYS_COLOR}&color=${TRAINING_COLOR}&color=${DARK_BLUE}`}
    frameBorder="0"
    scrolling="no"
  />
);

export default Calendar;
