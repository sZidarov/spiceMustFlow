function spiceMustFlow (startingYield){
let yield = startingYield;
let dayCount = 0;
let totalAmount = 0;
const crewConsumptionPerDay = 26;
const endOfShiftConsumption = 26;
while (yield>=100){
    totalAmount += yield;
    totalAmount -= crewConsumptionPerDay;
    if (totalAmount<0){
        totalAmount = 0;
    }
    dayCount++;
    yield-=10;
}
if (yield<100){
    totalAmount -= endOfShiftConsumption;
    if (totalAmount<0){
        totalAmount = 0;
    }
}
console.log(dayCount);
console.log(totalAmount);
}
spiceMustFlow(99);