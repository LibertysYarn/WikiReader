* @param day
  * @param month * @
  return {
    string
  }
name of zodiac sign
  * /

function getZodiacSign(day, month) {

  var zodiacSigns = {
    'capricorn': 'capricorn',
    'aquarius': 'Aquarius',
    'pisces': 'Pisces',
    'aries': 'Aries',
    'taurus': 'Taurus',
    'gemini': 'Gemini',
    'cancer': 'Cancer',
    'leo': 'Leo',
    'virgo': 'virgo',
    'libra': 'Libra',
    'scorpio': 'Scorpio',
    'sagittarius': 'Sagitarius'
  }

  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
    return zodiacSigns.capricorn;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.aries;
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return zodiacSigns.leo;
  } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return zodiacSigns.libra;
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}

var chineseZodiac = function(animalResult) {
  if (animalResult() === false) {
    alert("You are doing it right dude!");
  } else {
    alert("Your chinese zodiac sign is the " + animalResult());
  }
};

var animalResult = function() {
  if (year % 12 === 0) {
    return "Monkey";
  } else if (year % 12 === 1) {
    return "Rooster";
  } else if (year % 12 === 2) {
    return "Dog";
  } else if (year % 12 === 3) {
    return "Pig";
  } else if (year % 12 === 4) {
    return "Rat";
  } else if (year % 12 === 5) {
    return "Ox";
  } else if (year % 12 === 6) {
    return "Tiger";
  } else if (year % 12 === 7) {
    return "Rabbit";
  } else if (year % 12 === 8) {
    return "Dragon";
  } else if (year % 12 === 9) {
    return "Snake";
  } else if (year % 12 === 10) {
    return "Horse";
  } else {
    return "Sheep";
  }
};
year = prompt("Enter an year plz:");
chineseZodiac(animalResult);
