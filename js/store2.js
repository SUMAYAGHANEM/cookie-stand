'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const seatlle =

{
  place : 'seatlle',
  minCustomersEachHour:[],
  maxCustomersEachHour :[],
  avgCookiePerCustomer :6.3,
  getNum: function (min,max)
  {
    this.minCustomersEachHour = getRandomNumber(min,max);
    this.maxCustomersEachHour = getRandomNumber(min,max);
  }
};
function getRandomNumber ( min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
};
render: function()
{
  {
    const container = document.getElementById('salmon-coockies');
    const articleEl = document.createElement('articale');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.place;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i< this.hours.length; i++);
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [`${hours[i]}: ${this.minCustomersEachHour} ${this.maxCustomersEachHour} 6.3`];
    }

  }

};
seatlle.getNum(23,65);
seatlle.render();
console.log (seatlle);

