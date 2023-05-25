/* 
  Responsibility:

  Invoke all of the functions that generate HTML and then use `console.log` 
  to output the resulting HTML strings to the console panel.
*/

import { BandsHTML } from './bands.js';
import { CitiesHTML } from './cities.js';

console.log(BandsHTML());
console.log(CitiesHTML())

















document.getElementById("app").innerHTML = `
<h1>Beyonce World Tour Dates</h1>
<ol>
  <li>Generate an ordered list of opening bands as HTML</li>
  <li>Generate an ordered list of cities as HTML</li>
  <li>Generate a list of tour dates that includes city and opening band as HTML</li>
</ol>
`;
