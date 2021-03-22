'use strict';
let hours5 = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Lima =

{
  place: 'Lima',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  avgCookiePerCustomer: 6.3,
  customersPerHoursArray: [],
  cookies :[],
  generateCustomersPerHours: function (min, max) {

    for (let i = 0; i < hours5.length; i++) {
      let customersEachHour = Math.floor(getRandomNumber(min, max));
      this.customersPerHoursArray.push(Math.floor(customersEachHour));
    }
  },
  calcCookies: function () {
    this.generateCustomersPerHours(this.minCustomersEachHour, this.maxCustomersEachHour);
    for (let i=0; i<hours5.length ; i++)
    {
      let cookiesPerHours = this.avgCookiePerCustomer* this.customersPerHoursArray[i];
      this.cookies.push(cookiesPerHours);
    }
    console.log(this.cookies);
  }

};


Lima.render = function () {
  this.calcCookies();

  const container = document.getElementById('salmon-coockies');
  const articleEl = document.createElement('articale');
  container.appendChild(articleEl);
  const h2El = document.createElement('h2');
  articleEl.appendChild(h2El);
  h2El.textContent = this.place;

  const ulEl = document.createElement('ul');
  articleEl.appendChild(ulEl);
  for (let i = 0; i < hours5.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = [`${hours5[i]}: ${this.cookies[i]} cookie`];
  }



};

Lima.render();
console.log(Lima);


