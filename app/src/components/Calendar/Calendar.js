import React from 'react';
import { CalendarFrame } from './Calendar.styles';

const BASE_URL = 'https://calendar.google.com/calendar/embed';
const BGCOLOR = '%230B8043&ctz';
const OPTIONS = 'ctz=Europe%2FMadrid&showTitle=0&showCalendars=0&showPrint=0';

const FRIENDLIES_CALENDAR = 'ODBoMGo3NXNsZG9mdDBybHVtM2FwaWxxcWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
const GENERAL_CALENDAR = 'YWR2YWxreXJpYXNAZ21haWwuY29t';
const HOLIDAYS_CALENDAR = 'ZXMuc3BhaW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20';
const MATCHES_CALENDAR = 'dWVyN21rOXUxNmptcTdqbHU4ZDhhbnVwdG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
const TRAINING_CALENDAR = 'cTg5YzEzdG8yam5idDU0ZjNoZnBpbDNzdmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';

const LIGHT_GREEN = '%237CB342';
const BRIGHT_GREEN = '%23b0ffc5';
const YELLOW = '%23F6BF26';
const DARK_GREEN = '%230B8043';
const GREEN = '%237CB342';
const LIGHT_BLUE = '%23039BE5';
const BROWN = '%23A79B8E';

const Calendar = () => (
  <CalendarFrame
    src={`${BASE_URL}?height=600&wkst=2&bgcolor=${BRIGHT_GREEN}&${OPTIONS}&src=${FRIENDLIES_CALENDAR}&src=${GENERAL_CALENDAR}&src=${HOLIDAYS_CALENDAR}&src=${MATCHES_CALENDAR}&src=${TRAINING_CALENDAR}&color=${LIGHT_GREEN}&color=${BROWN}&color=${LIGHT_BLUE}&color=${DARK_GREEN}&color=${YELLOW}`}
    frameBorder="0"
    scrolling="no"
  />
);

export default Calendar;
