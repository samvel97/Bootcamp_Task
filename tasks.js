'use strict'

//**1.random number**
let a = Math.round((Math.random() * 100))
console.log(a)


//**2.inside or outside point**
let x = 5
let y = 6
let r = 10
let random = Math.pow(x,2)+Math.pow(y,2)

		if(random <= Math.pow(r,2)){
			console.log('inside')
		}
		else{
			console.log('outside')
		}