//fullName function
function fullName(firstName, lastName) {
   return `${firstName.trim()} ${lastName.trim()}`;

}

//ageInYears function
function ageInYears(birthdayStr) {
  const birthday = new Date(birthdayStr);
  const ageInMilliseconds = getNow() - birthday;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 *365;

  return Math.floor(ageInMilliseconds / millisecondsPerYear);
}
function getNow() {
  return Date.now();
}

function isOver21(birthdayStr) {
  // const birthday = new Date(birthdayStr);
  // let twentyOneYet = getNow() - birthday;
  // let differenceAge = twentyOneYet - 21;
  // if (differenceAge >= 0 ) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  //
  return ageInYears(birthdayStr) >= 21;
}

function isLeapYear(year) {
  year = Number(year);
  let fourYear = year % 4;
  let hundredCheck= year % 100;
  if (fourYear != 0)  {
   return false;
  }
   else if (hundredCheck != 0) {
    return true;
    }

 // return (year % 4 ==0 ) && ((year % 100 != 0) || (year % 400 ==0 )) ;
}
