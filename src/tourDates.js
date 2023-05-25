import { getTourDates, getCities, getOpeners } from './database.js';
/* 
  Responsbility:

  This module should contain a function that converts
  the raw data objects for tour dates into HTML elements 
  with the following structure.

  <article class="events">
    <header>Tour Details</header>

    <ol>
      <li class="event">City, Country on Date:Time at Venue with opening act Act</li>
      <li class="event">City, Country on Date:Time at Venue with opening act Act</li>
      <li class="event">City, Country on Date:Time at Venue with opening act Act</li>
    </ol>
  </article>
*/

export const TourDatesHTML = () => {
  const tourDates = getTourDates();
  const cities = getCities();
  const openers = getOpeners();

  let HTMLstring = `  <article class="events">
    <header>Tour Details</header>

    <ol>`

  for (const tourDate of tourDates) {
    let matchedCity = null;
    for (const city of cities) {
      if (tourDate.cityId === city.id) {
        matchedCity = city;
        break;
      }
    }

    let matchedOpener = null;
    for (const opener of openers) {
      if (opener.id === tourDate.opener) {
        matchedOpener = opener;
        break;
      }
    }

    HTMLstring += `<li class="event">${matchedCity.city}, ${matchedCity.country} on ${tourDate.date}:${tourDate.time} at ${tourDate.venue} with opening act ${matchedOpener.band}.</li>\n`
  }



  HTMLstring += ` </ol>
      </article>`

  return HTMLstring;
}