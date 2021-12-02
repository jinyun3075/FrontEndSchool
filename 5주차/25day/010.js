let s = new Set('abcscd');
//Set(5) {'a', 'b', 'c', 's', 'd'}
s.add('f')
//Set(6) {'a', 'b', 'c', 's', 'd', …}
s.delete('a')
//true
// Set(5) {'b', 'c', 's', 'd', 'f'}
s.has('c')
//true
s.forEach(i =>console.log(i));
//b,c,s,d,f