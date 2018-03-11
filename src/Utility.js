function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function ageInYears(birthdayString) {
  const birthday = new Date(birthdayString);
  const ageInMilliseconds = Date.now() - birthday;
  const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000; // 31557600000

  return Math.floor(ageInMilliseconds / millisecondsPerYear);
}

function isOver21(birthdayString) {
  return ageInYears(birthdayString) >= 21;
}
