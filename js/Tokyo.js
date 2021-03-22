'use strict';

let hours2 = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function City (place,minCustomersEachHour,maxCustomersEachHour,avgCookiePerCustome,customersPerHoursArray,cookies,calcCookies)
{
  this.place= place;
  this.minCustomersEachHour= minCustomersEachHour;
  this.minCustomersEachHour= maxCustomersEachHour;
  this.avgCookiePerCustome=avgCookiePerCustome;
  this.customersPerHoursArray = customersPerHoursArray;
  this.cookies=cookies[calcCookies];
  this.calcCookies=calcCookies;
  this.generateCustomersPerHours= generateCustomersPerHours;
  this.getRandomNumber= getRandomNumber;
}
let generateCustomersPerHours;
let getRandomNumber;
City.prototype.customersPerHoursArray = function (min,max)
{
  this.minCustomersEachHour = getRandomNumber(min,max);
};

City.prototype.render = function()
{
  const container = document.getElementById('salmon-coockies');
  const articleEl = document.createElement('articale');
  container.appendChild(articleEl);
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.place;

  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < hours2.length; i++)
  {
    let generateCustomersPerHours;
    generateCustomersPerHours = function (min, max) {

      let calcCookies;
      calcCookies= function () {
        this.generateCustomersPerHours(this.minCustomersEachHour, this.maxCustomersEachHour);

        for (let i = 0; i < hours2.length; i++){
          let customersEachHour = Math.floor(getRandomNumber(min, max));
          this.customersPerHoursArray.push(Math.floor(customersEachHour));
        }

        for (let i=0; i<hours2.length ; i++)
        {
          let cookiesPerHours = this.avgCookiePerCustomer* this.customersPerHoursArray[i];
          this.cookies.push(cookiesPerHours);
        }
        console.log(this.cookies);
      };
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${hours2[i]}: ${this.cookies[i]} cookie`];
      this.calcCookies();
    };
  }
  const seatlle = new City ( 'seatlle',23,65,6.3);
  seatlle.customersPerHoursArray(23,65);
  seatlle.render();
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}};


