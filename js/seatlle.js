// /* eslint-disable no-unused-vars */
// 'use strict';

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am',
//   '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// let footerD = [];

// let newS=document.getElementById('newStore');

// function getRandomNumber(min, max)
// {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let footerCells = [];


// function City (place,minCustomersEachHour,maxCustomersEachHour,avgCookiePerCustome)
// {
//   this.place= place;
//   this.minCustomersEachHour= minCustomersEachHour;
//   this.maxCustomersEachHour= maxCustomersEachHour;
//   this.avgCookiePerCustome=avgCookiePerCustome;
//   this.customersPerHoursArray = [];
//   this.cookies=[];
//   this.total =0;
//   this.totalCulomn=0;
//   this.total = 0;
//   this.totalCulomn = 0;
//   this.totalOfTotal = 0 ;
//   this.sumColumn = function ( )
//   {
//     let loc =[seatlle,Tokyo,Dubai,Paris,Lima];
//     for (let i=0;i<hours.length;i++)
//     {
//       for (let j =0;j<loc.length;j++)
//       {
//         this.totalCulomn +=loc[j].cookies[i];
//       }
//       footerD.push(this.totalCulomn);
//       this.totalOfTotal=this.totalOfTotal+this.totalCulomn;
//       this.totalCulomn = 0;
//       console.log(this.totalCulomn);
//     }
//   };
// }

// City.prototype.calc = function ()
// {

//   for (let i = 0; i < hours.length; i++) {
//     let customersEachHour =getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//     this.customersPerHoursArray.push(customersEachHour);
//   }

//   for (let i=0; i<hours.length ; i++)
//   {
//     let cookiesPerHours = this.avgCookiePerCustome * this.customersPerHoursArray[i];
//     this.cookies.push(Math.floor(cookiesPerHours));
//   }


// };



// // City.prototype.render = function()
// // {
// //   this.calc();
// //   const container = document.getElementById('salmon-coockies');
// //   const articleEl = document.createElement('articale');
// //   container.appendChild(articleEl);
// //   const h2El = document.createElement('h2');
// //   articleEl.appendChild(h2El);
// //   h2El.textContent = this.place;

// //   const ulEl = document.createElement('ul');
// //   articleEl.appendChild(ulEl);
// //   for (let i = 0; i < hours.length; i++) {
// //     const liEl = document.createElement('li');
// //     ulEl.appendChild(liEl);
// //     liEl.textContent = [`${hours[i]}: ${this.cookies[i]} cookie`];
// //   }


// // };





// // table:
// const section = document.getElementById('cookie-stand');
// const tabelElement = document.createElement('table');

// section.appendChild(tabelElement);
// let footerData = [];

// // header

// function headerRander()
// {
//   const tableHeaderRow1 = document.createElement('tr');
//   tabelElement.appendChild(tableHeaderRow1);

//   const tableHeader = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader);
//   tableHeader.textContent='LOCATION';
//   for (let i=0;i<hours.length;i++)
//   {
//     const tableHeader = document.createElement('th');
//     tableHeaderRow1.appendChild(tableHeader);
//     tableHeader.textContent=hours[i];
//   }

//   const tableHeader16 = document.createElement('th');
//   tableHeaderRow1.appendChild(tableHeader16);
//   tableHeader16.textContent='Daily Location Total';
// }

// headerRander();

// // tablebody/
// City.prototype.render = function ()
// {
//   const tableHeaderRow1 = document.createElement('tr');
//   tabelElement.appendChild(tableHeaderRow1);
//   const locationsNames = document.createElement('td');
//   tableHeaderRow1.appendChild(locationsNames);
//   locationsNames.textContent= this.place;
//   for (let i = 0; i < hours.length; i++){
//     const tableData1 = document.createElement('td');
//     tableHeaderRow1.appendChild(tableData1);
//     tableData1.textContent=this.cookies[i];
//     this.total= this.total+ this.cookies[i];
//     this.totalOfTotal=this.totalOfTotal+this.totalCulomn;


//   }
//   const sumTableData = document.createElement('td');
//   tableHeaderRow1.appendChild(sumTableData);
//   sumTableData.textContent=this.total;

// };

// // footerRow,

// City.prototype.footerRender = function()
// {
//   this.sumColumn();
//   const footerRow = document.createElement('tr');
//   tabelElement.appendChild(footerRow);
//   const tableHeader2 = document.createElement ('th');
//   footerRow.appendChild(tableHeader2);
//   tableHeader2.textContent = 'Total';
//   for(let i = 0; i<hours.length ; i++)
//   {
//     const td=document.createElement('th');
//     footerRow.appendChild(td);
//     td.textContent= footerD[i];

//   }
//   const td2=document.createElement('th');
//   footerRow.appendChild(td2);
//   td2.textContent= this.totalOfTotal;

// };



// // form

// let myForm = document.getElementById('cookieForm');
// myForm.addEventListener('submit', addNewStore);

// function addNewStore(event) {
//   event.preventDefault();
//   let storePlace = event.target.place.value;
//   console.log(storePlace);

//   let minCustomer = Number(event.target.minCustomersEachHour.value);
//   console.log(minCustomer);

//   let maxCustomer =Number(event.target.maxCustomersEachHour.value);
//   console.log(maxCustomer);

//   let avgCookie = Number (event.target.avgCookiePerCustome.value);
//   console.log(avgCookie);

//   let newPlace = new City (storePlace,minCustomer,maxCustomer,avgCookie);

//   // newPlace.avgCookiePerCustome();
//   newPlace.render();
// }
// const seatlle = new City ( 'seatlle',23,65,6.3);

// seatlle.calc();
// seatlle.render();
// console.log (seatlle.cookies);



// const Tokyo = new City ( 'Tokyo',3,24,1.2);

// Tokyo.calc();
// Tokyo.render();
// console.log (Tokyo.cookies);

// const Dubai = new City ( 'Dubai',11,38,3.7);
// Dubai.calc();
// Dubai.render();
// console.log (Dubai.cookies);

// const Paris = new City ( 'Paris',20,38,2.3);
// Paris.calc();

// Paris.render();
// console.log (Paris.cookies);

// const Lima = new City ( 'Lima',2,16,4.6);
// Lima.calc();

// Lima.render();
// console.log (Lima.cookies);

// seatlle.footerRender();


/* eslint-disable no-unused-vars */
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am',
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let footerCells = []; // here i declared an array for the footer cells

function City(place, minCustomersEachHour, maxCustomersEachHour, avgCookiePerCustome) {
  this.place = place;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.avgCookiePerCustome = avgCookiePerCustome;
  this.customersPerHoursArray = [];
  this.cookies = [];
  this.total = 0; // i declared a new variable for total
  this.totalCulomn = 0; // i added these two variables for summation in the footer to start with zero and then add new data
  this.totalOfTotal = 0;

}
City.prototype.sumOfcolumns = function () {
  let city = [seatlle, Tokyo, Dubai, Paris, Lima];
  for (let i = 0; i < hours.length; i++) {
    for (let x = 0; x < city.length; x++) {
      this.totalCulomn += city[x].cookies[i];
    }
    footerCells.push(this.totalCulomn);
    this.totalOfTotal = this.totalOfTotal + this.totalCulomn;
    this.totalCulomn = 0;
    // This function to sum colomn data.
  }
};

City.prototype.calc = function () {

  for (let i = 0; i < hours.length; i++) {
    let customersEachHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
    this.customersPerHoursArray.push(customersEachHour);
  }

  for (let i = 0; i < hours.length; i++) {
    let cookiesPerHours = this.avgCookiePerCustome * this.customersPerHoursArray[i];
    this.cookies.push(Math.floor(cookiesPerHours));
  }
};

// table:
const section = document.getElementById('cookie-stand');
const tabelElement = document.createElement('table');
section.appendChild(tabelElement);
let myForm = document.getElementById('cookieForm');
// let newData = document.getElementById('cookie-stand');
// let footerData = [];

// header

City.prototype.headerRander = function () {
  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);

  const tableHeader = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader);
  tableHeader.textContent = 'LOCATION';

  for (let i = 0; i < hours.length; i++) {
    const tableHeader = document.createElement('th');
    tableHeaderRow1.appendChild(tableHeader);
    tableHeader.textContent = hours[i];
  }

  const tableHeader16 = document.createElement('th');
  tableHeaderRow1.appendChild(tableHeader16);
  tableHeader16.textContent = 'Daily Location Total';
};


// tablebody/
City.prototype.render = function () {

  this.calc();

  const tableHeaderRow1 = document.createElement('tr');
  tabelElement.appendChild(tableHeaderRow1);
  const locationsNames = document.createElement('td');
  tableHeaderRow1.appendChild(locationsNames);
  locationsNames.textContent = this.place;
  for (let i = 0; i < hours.length; i++) {
    const tableData1 = document.createElement('td');
    tableHeaderRow1.appendChild(tableData1);
    tableData1.textContent = this.cookies[i];
    this.total = this.total + this.cookies[i]; //here i put the summation for total cookies
  }
  const sumTableData = document.createElement('td');
  tableHeaderRow1.appendChild(sumTableData);
  sumTableData.textContent = this.total; // here is the last colomn in the table



  // footerRow,
  City.prototype.tableFooter = function () {
    this.sumOfcolumns();
    const footerTable = document.createElement('tr');
    tabelElement.appendChild(footerTable);

    const tableFooter1 = document.createElement('td');
    footerTable.appendChild(tableFooter1);
    tableFooter1.textContent = 'Total';

    for (let i = 0; i < hours.length; i++) {
      const tableHeader1 = document.createElement('th');
      footerTable.appendChild(tableHeader1);
      tableHeader1.textContent = footerCells[i];
    }
    const tableHeader1 = document.createElement('th');
    footerTable.appendChild(tableHeader1);
    tableHeader1.textContent = this.totalOfTotal;
  };
};



// form

// let myForm = document.getElementById('cookieForm');
myForm.addEventListener('submit', addNewStore);

function addNewStore(event) {
  event.preventDefault();

  let rowtodelet = tabelElement.rows.length;
  tabelElement.deleteRow(rowtodelet - 1); // here i deleted the footer so i can add the new object before the total.

  let storePlace = event.target.place.value;
  let minCustomer = Number(event.target.minCustomersEachHour.value);
  let maxCustomer = Number(event.target.maxCustomersEachHour.value);
  let avgCookie = Number(event.target.avgCookiePerCustome.value);




  let newPlace = new City(storePlace, minCustomer, maxCustomer, avgCookie);
  newPlace.render();
  // here i will put the new row and then the total
  let city = [seatlle, Tokyo, Dubai, Paris, Lima];
  // city.push(newPlace);
  for (let i = 0; i < hours.length; i++) {
    for (let x = 0; x < city.length; x++) {
      this.totalCulomn += city[x].cookies[i];
    }
    footerCells.push(this.totalCulomn);
    this.totalOfTotal = this.totalOfTotal + this.totalCulomn;
    this.totalCulomn = 0;
  }

  const btnRow = document.createElement('tr');
  tabelElement.appendChild(btnRow);

  const btnCell = document.createElement('th');
  btnRow.appendChild(btnCell);
  btnCell.textContent = 'Total';

  for (let i = 0; i < hours.length; i++) {
    const btnCell1 = document.createElement('th');
    btnRow.appendChild(btnCell1);
    btnCell1.textContent = footerCells[i];
  }
  const btnCell2 = document.createElement('th');
  btnRow.appendChild(btnCell2);
  btnCell2.textContent = this.totalOfTotal;

}




const seatlle = new City('seatlle', 23, 65, 6.3);
seatlle.headerRander();
// seatlle.calc();
seatlle.render();
// console.log (seatlle.cookies);



const Tokyo = new City('Tokyo', 3, 24, 1.2);

// Tokyo.calc();
Tokyo.render();
// console.log (Tokyo.cookies);

const Dubai = new City('Dubai', 11, 38, 3.7);
// Dubai.calc();
Dubai.render();
// console.log (Dubai.cookies);

const Paris = new City('Paris', 20, 38, 2.3);
// Paris.calc();

Paris.render();
// console.log (Paris.cookies);

const Lima = new City('Lima', 2, 16, 4.6);
// Lima.calc();
Lima.render();
// console.log (Lima.cookies);

seatlle.tableFooter();
