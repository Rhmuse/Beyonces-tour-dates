import { getOpeners } from './database.js';

/* 
  Responsbility:

  This module should contain a function that converts
  the raw data objects for opening acts into HTML elements 
  with the following structure.

  <article class="acts">
    <header>Opening Acts</header>

    <ol>
      <li class="act">Band name</li>
      <li class="act">Band name</li>
      <li class="act">Band name</li>
    </ol>
  </article>
*/

// store opener in local variable
// define and export function called BandsHTML
// iterate through opener arr 
// assign band names to li items
// return the html string

export const BandsHTML = () => {
  const openers = getOpeners();
  let HTMLstring = `<article class="acts">
    <header>Opening Acts</header>

    <ol>`

  for (const opener of openers) {
    HTMLstring += `<li class="act"> ${opener.band}</li>\n`
  }

  HTMLstring += `</ol>
    </article>`

  return HTMLstring;
}