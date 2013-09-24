var englishTime = require("english-time");
var units = englishTime.units;

var tr = {
  ms: units.milliseconds,
  milisaniye: units.milliseconds,
  milisaniyeler: units.milliseconds,

  s: units.seconds,
  sn: units.seconds,
  saniye: units.seconds,
  saniyeler: units.seconds,

  d: units.minutes,
  dk: units.minutes,
  dakika: units.minutes,
  dakikalar: units.minutes,

  sa: units.hours,
  saat: units.hours,
  saatler: units.hours,

  g: units.days,
  gun: units.days,
  gunler: units.days,
  'gün': units.days,
  'günler': units.days,

  h: units.weeks,
  hafta: units.weeks,
  haftalar: units.weeks
};

var singular = [
  'milisaniye', 'saniye', 'dakika', 'gün', 'hafta'
];

module.exports = turkishTime;

function turkishTime (input) {
  return englishTime(input, tr, singular);
}
