/* eslint-disable no-unused-vars */
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function City (place,minCustomersEachHour,maxCustomersEachHour,avgCookiePerCustome)
{
  this.place= place;
  this.minCustomersEachHour= minCustomersEachHour;
  this.maxCustomersEachHour= maxCustomersEachHour;
  this.avgCookiePerCustome=avgCookiePerCustome;
  this.customersPerHoursArray = [];
  this.cookies=[];
}

City.prototype.calc = function ()
{

  for (let i = 0; i < hours.length; i++) {
    let customersEachHour =getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
    this.customersPerHoursArray.push(customersEachHour);
  }

  for (let i=0; i<hours.length ; i++)
  {
    let cookiesPerHours = this.avgCookiePerCustome * this.customersPerHoursArray[i];
    this.cookies.push(Math.floor(cookiesPerHours));
  }
};



City.prototype.render = function()
{
  this.calc();
  const container = document.getElementById('salmon-coockies');
  const articleEl = document.createElement('articale');
  container.appendChild(articleEl);
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.place;

  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < hours.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = [`${hours[i]}: ${this.cookies[i]} cookie`];
  }


};


const seatlle = new City ( 'seatlle',23,65,6.3);

seatlle.render();
console.log (seatlle.cookies);
function getRandomNumber(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Tokyo = new City ( 'Tokyo',3,24,1.2);

Tokyo.render();
console.log (Tokyo.cookies);

const Dubai = new City ( 'Dubai',11,38,3.7);

Dubai.render();
console.log (Dubai.cookies);

const Paris = new City ( 'Paris',20,38,2.3);

Paris.render();
console.log (Paris.cookies);

const Lima = new City ( 'Lima',2,16,4.6);

Lima.render();
console.log (Lima.cookies);

// table:

this.headerRander = function()
{
  const container = document.getElementById('cookie-stand');

  const tableHeaderRow1 = document.createElement('tr');
  container.appendChild(tableHeaderRow1);

  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);
  tableHeader.textContent='LOC';
  for (let i=0;i<hours.length;i++)
  {
    const tableHeader = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader);
    tableHeader.textContent=hours[i];
  }

  const tableHeader16 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader16);
  tableHeader16.textContent='Daily Location Total';
} ;

this.setSummationOfColumns = function ( )
{
  let loc =['seattle','Tokyo','Dubai','Paris','Lima'];
  for (let i=0;i<hours.length;i++)
  {
    for (let j =0;j<loc.length;j++)
    {
      this.totalCulomn += loc[j].cookiesPerHours[i];
    }

    loc.push(this.totalCulomn);
    this.totalOfTotal=this.totalOfTotal+this.totalCulomn;
    this.totalCulomn = 0;
    console.log(this.totalCulomn);
  }
};



