//fullName function
function fullName(firstName, lastName) {
   return `${firstName.trim()} ${lastName.trim()}`;

}

//ageInYears function
function ageInYears(birthdayStr) {
  const birthday = new Date(birthdayStr);
  const ageInMilliseconds = Date.now() - birthday;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 *365;

  return Math.floor(ageInMilliseconds / millisecondsPerYear); 
}
