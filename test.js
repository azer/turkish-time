var time = require("./");

it('converts time written in turkish to epoch', function(){
  expect(time('1 milisaniye')).to.equal(1);
  expect(time('375 milisaniye')).to.equal(375);

  expect(time('1 saniye')).to.equal(1000);
  expect(time('5 Dakika')).to.equal(300000);
  expect(time('5 dakika 15 saniye')).to.equal(315000);
  expect(time('2 Saat, 5 Dakika and 15 Saniye')).to.equal(7515000);

  expect(time('1sa')).to.equal(3600000);
  expect(time('20sa 5d 15s')).to.equal(72315000);

  expect(time('3 hafta, 5 gün, 6 saat')).to.equal(2268000000);
});

it('ignores unrecognized patterns', function(){
  expect(time('her 1 milisaniye')).to.equal(1);
  expect(time('foo, bar12 a3m 1 milisaniye + 5ms + 4ms hello world')).to.equal(10);
});

it('accepts singular time units without numbers', function(){

  expect(time('milisaniye')).to.equal(1);
  expect(time('bir milisaniye')).to.equal(1);
  expect(time('her milisaniye')).to.equal(1);
  expect(time('her dakika + 45 saniye')).to.equal(105000);

});
