import { getCities } from './database.js';

/* 
  Responsbility:

  This module should contain a function that converts
  the raw data objects for cities into HTML elements 
  with the following structure.

  <article class="cities">
    <header>Locations</header>

    <ol>
      <li class="city">City, Country</li>
      <li class="city">City, Country</li>
      <li class="city">City, Country</li>
    </ol>
  </article>
*/

export const CitiesHTML = () => {
  const cities = getCities();
  let HTMLstring = `  <article class="cities">
    <header>Locations</header>

    <ol>`

  for (const city of cities) {
    HTMLstring += `<li class="city"> ${city.city}, ${city.country}</li>\n`
  }

  HTMLstring += `  </ol>
    </article>`

  return HTMLstring;
}