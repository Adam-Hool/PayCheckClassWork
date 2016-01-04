"use strict";
var hours = 0;
var wage = 0;
var name;
var totalIncome;
var overtimeHours=0;
var overtimeWage=1.5*wage;
var overtimeMoney=0;

name = prompt("Please enter your name?");
wage = prompt("what is your hourly wage?");
hours = prompt("how many hours did u work?");
if (hours>40)
{
	overtimeHours=hours-40;
	overtimeMoney = overtimeHours*overtimeWage;
	totalIncome = overtimeMoney + totalIncome;
}
totalIncome=hours*wage;
console.log(wage);
console.log(hours);


console.log(name +" made "+ totalIncome + " on last pay check");