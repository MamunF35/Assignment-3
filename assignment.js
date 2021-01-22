
// https://github.com/MamunF35/Assignment-3


// kilometerToMeter
function kilometerToMeter(km)
{
    if(km<0){
        return "Distnace can't be negative(Wrong value)! Please Enter (km>=0)"
    }
    var meter=km*1000;
    return meter;
}
var meter=kilometerToMeter(8.76)
console.log(meter);


// budgetCalculator
function budgetCalculator(noOfWatch,noOfPhone,noOfLaptop)
{

    var unitPriceWatch=50,unitPricePhone=100,unitPriceLaptop=500;
    if(noOfWatch<0 || noOfPhone<0 || noOfLaptop<0)
    {
        return "Quantity can't be negative ! (Enter Quantity>=0)"
    }
    var totalBudget=unitPriceWatch*noOfWatch+unitPricePhone*noOfPhone+unitPriceLaptop*noOfLaptop;
    return totalBudget;
}
var totalBudget=budgetCalculator(1,1,1);
console.log(totalBudget);


// hotelCost
function hotelCost(days)
{
    var totalCost,noDiscount,firstDiscount,secondDiscount;
    if(days<0)
    {
        return "You Entered wrong value (days can't be negative) ! Enter days>=0";
    }
    else if(days<=10){
        totalCost=days*100;
    }
    else if(days<=20)
    {
        noDiscount=10*100;
        firstDiscount=(days-10)*80;
        totalCost=noDiscount+firstDiscount;
    }
    else
    {
        noDiscount=10*100;
        firstDiscount=10*80;
        secondDiscount=(days-20)*50;
        totalCost=noDiscount+firstDiscount+secondDiscount;
    }
   return totalCost;
}

var totalCost=hotelCost(21)
console.log(totalCost);


//megaFriend
function megaFriend(friends)
{
    var longestName="";
    for(var i=0;i<friends.length;i++)
    {
      if(friends[i].length > longestName.length)
      {
        longestName = friends[i];
      }
    }
    return longestName;
}

var friendsName=["mamun","Kaji Al Mamun","Kazi Al Amin","Kazi Al Roman"];
var megaName = megaFriend(friendsName);
console.log(megaName);