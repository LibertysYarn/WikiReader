// * @param day
//   * @param month * @
//   return {
//     string
//   }
// name of zodiac sign
//   * /
//
// function getZodiacSign(day, month) {
//
//   var zodiacSigns = {
//     'capricorn': 'capricorn',
//     'aquarius': 'Aquarius',
//     'pisces': 'Pisces',
//     'aries': 'Aries',
//     'taurus': 'Taurus',
//     'gemini': 'Gemini',
//     'cancer': 'Cancer',
//     'leo': 'Leo',
//     'virgo': 'virgo',
//     'libra': 'Libra',
//     'scorpio': 'Scorpio',
//     'sagittarius': 'Sagitarius'
//   }
//
//   if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
//     return zodiacSigns.capricorn;
//   } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
//     return zodiacSigns.aquarius;
//   } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
//     return zodiacSigns.pisces;
//   } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
//     return zodiacSigns.aries;
//   } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
//     return zodiacSigns.taurus;
//   } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
//     return zodiacSigns.gemini;
//   } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
//     return zodiacSigns.cancer;
//   } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
//     return zodiacSigns.leo;
//   } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
//     return zodiacSigns.virgo;
//   } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
//     return zodiacSigns.libra;
//   } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
//     return zodiacSigns.scorpio;
//   } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
//     return zodiacSigns.sagittarius;
//   }
// }
//
//
// var chineseZodiac = function(animalResult) {
//     var chineseAnimal = function() {
//       var year = prompt("Enter an year plz:");
//       var animal = [Monkey, Rooster, Dog, Pig, Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep];
//       var a === year % 12;
//       return "Your chinese zodiac sign is the " + animal[a];
//
//     };
//     chineseZodiac(animalResult);

function lunarNew(year) {
  var year;
  for (i = 0; year < i; i++);
  var startYear = [1912, 1931, 1950, 1969, 1988, 2007, 2026, 2045, 2064, 2083];
  var newMoon = [
    (startYear[i], 1, 3), ((startYear[i] + 1), 1, 6), ((startYear[i] + 2), 0, 26), ((startYear[i] + 3), 1, 14), ((startYear[i] + 4), 1, 3), ((startYear[i] + 5), 0, 23), ((startYear[i] + 6), 1, 11), ((startYear[i] + 7), 0, 31), ((startYear[i] + 8), 1, 19), ((startYear[i] + 9), 1, 8), ((startYear[i] + 10), 0, 28), ((startYear[i] + 11), 1, 15), ((startYear[i] + 12), 1, 5), ((startYear[i] + 13), 0, 24), ((startYear[i] + 14), 1, 12), ((startYear[i] + 15), 1, 2), ((startYear[i] + 16), 0, 22), ((startYear[i] + 17), 1, 9), ((startYear[i] + 18), 0, 29)
  ];

  var yearA = startYear[i];
  var lunar = newMoon[yearA - year];
  return lunar;
  // var newYearDate = [feb 17, feb 6, jan 26, feb 14, feb 3, jan 23, feb 11, jan 31, feb 19, feb 8, jan 28, feb 15, feb 5, jan 24, feb 12, feb 2, jan 22, feb 9, jan 29]
}
lunarNew(1975);
