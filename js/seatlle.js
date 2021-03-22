/* eslint-disable no-unused-vars */
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function City (place,minCustomersEachHour,maxCustomersEachHour,avgCookiePerCustome,customersPerHoursArray,cookies)
{
  this.place= place;
  this.minCustomersEachHour= minCustomersEachHour;
  this.minCustomersEachHour= maxCustomersEachHour;
  this.avgCookiePerCustome=avgCookiePerCustome;
  this.customersPerHoursArray = customersPerHoursArray;
  this.cookies=[];
}
City.prototype.customersPerHoursArray = function (minCustomersEachHour,maxCustomersEachHour)
{
  let generateCustomersPerHours;
  let getRandomNumber;
  this.minCustomersEachHour = getRandomNumber(minCustomersEachHour,maxCustomersEachHour);
  generateCustomersPerHours = function (minCustomersEachHour, maxCustomersEachHour) {

    for (let i = 0; i < hours.length; i++) {
      let customersEachHour = Math.floor(getRandomNumber(minCustomersEachHour, maxCustomersEachHour));
      this.customersPerHoursArray.push(Math.floor(customersEachHour));
    }
  };
  let calcCookies;
  calcCookies = function () {
    this.generateCustomersPerHours(this.minCustomersEachHour, this.maxCustomersEachHour);
    for (let i=0; i<hours.length ; i++)
    {
      let cookiesPerHours = this.avgCookiePerCustomer* this.customersPerHoursArray[i];
      this.cookies.push(cookiesPerHours);
    }
    console.log(this.cookies);
  };

};

City.prototype.render = function()
{
  seatlle.render = function () {
    this.calcCookies();

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
  seatlle.customersPerHoursArray(23,65);
  seatlle.render();
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}};


