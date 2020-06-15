function theBeatlesPlay(mus,ins) {
  var array = [];
  var i;
  for (i=0;i<mus.length;i++) {
    array.push(mus[i]+' plays '+ins[i]);
  }
  return array;
}

function johnLennonFacts(array) {
  var i = 0;
  while(i<array.length) {
    array[i]+='!!!';
    i+=1;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  } while(num<15);
  return array;
}
