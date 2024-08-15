//monotonic si esta ordenado en forma ascendente o desc

var isMonotonic = function (A) {
	const same = A[0] === A[A.length - 1];
	const increase = A[0] < A[A.length - 1];
	const decrease = A[0] > A[A.length - 1];
//	console.log('same: ', same);
//	console.log('inc: ', increase);
//	console.log('dec: ', decrease);

	if (same) {
		for (let i = 1; i < A.length; i++) {
			if (A[i - 1] !== A[i]) {
				console.log('no Mono');
				return false;
			}
		}
	} else if (increase) {
		for (let i = 1; i < A.length; i++) {
			if (A[i - 1] > A[i]){
				console.log('no Mono');
				return false;
			} 
		}
	} else if (decrease) {
		for (let i = 1; i < A.lenth; i++) {
			if (A[i - 1] < A[i]) {
				console.log('no Mono'); 
				return false;
			}
		}
	}
	console.log('si Mono');
	return true;
}

console.log('Probando: ');
isMonotonic([1, 2, 3, 3, 4, 5]);
isMonotonic([1, 3, 2, 3, 4, 5]);
isMonotonic([1, 1, 1, 1, 1, 6]);
isMonotonic([2, 2, 2, 2, 2, 2]);

// Cuando se compara desde el 2do elemento de un array, usar en el for i=1; i<arr.length
// Cuando es desde cero, usar i=0; i< arr.length-1 