
var arr = [0, 5, 8, 10, 100, -1];

console.warn(arr);

console.error(arr);

 {
    console.log('arr with index ', i, ' = ', arr[i]);
}

for(var i = arr.length-1; i >= 0; i--) {
    console.log('arr with index ', i, ' = ', arr[i]);
}

for(var i = 0; i < arr.length; i = i + 2) {
    console.log('arr with index ', i, ' = ', arr[i]);
}
console.log('other cycles');

//cycles:
//forEach,
//for( in )

// cycle while
console.log('while')
i = 0;
while (i < arr.length) {
    console.log('arr with index ', i, ' = ', arr[i]);
    i++;
}
// cycle do while
console.log('do while')
i = 0;
do{
    console.log('arr with index ', i, ' = ', arr[i]);
    i++;
}while (i < arr.length);


console.log('for (in)');

var car = {
    model: 'toyota',
    volum: '1.5',
    power: 100
}
console.log('our object', car);
console.log('our object', Object.keys(car));
for(var key in car) {
    console.log('car has', key, 'with value =', car[key] )
}
console.log('cycle for object with simple sycle for');
var keys = Object.keys(car);
for(let i = 0; i < keys.length; i++) {
    var currentKey = keys[i];
    console.log('car has kay', currentKey, 'value')
}


//

var arr2 = [1, 2, 4, 5, 6646, 'dfggghh', 'fgfgfgdg', Number.POSITIVE_INFINITY, 54, -2];

var sum = 0;

for (var i = 0; i<arr2.length; I++) {
    if(typeof arr2 !=='number') {
        console.log('continue', arr2[i]);
        continue;
    }
    if(arr2[i] == Number.POSITIVE_INFINITY || arr2[i == Number.NEGATIVE_INFINITY]) {
        console.log('brake');
        brake;
    }

    console.log('previouce sum', sum);
    console.log('current array element', arr[i]);
    sun = sum + arr2[i];
}

