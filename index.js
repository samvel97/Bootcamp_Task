'use strict'


let cardBlock = document.querySelector('.block')
let inp = document.querySelector('.textInput')

let data = [
	{id:1, title:'task 1', checked:false, button:'-', del:false},
]

//**1.Card constructor**
let cardList = []
const cardMaking = ()=>{
	let initialCardItem = document.createElement('div')	
	let del = document.createElement('button')
	let checking = document.createElement('input')
	data.map(elem=>{
		checking.setAttribute("type", "checkbox");
		cardBlock.appendChild(initialCardItem).innerHTML = elem.title
		cardBlock.appendChild(initialCardItem).classList.add('cardItem')
		cardBlock.appendChild(initialCardItem).setAttribute('id', elem.id)
		initialCardItem.appendChild(del).setAttribute('id', elem.id)
		initialCardItem.appendChild(checking).checked = elem.checked
		initialCardItem.appendChild(checking).classList.add('checking')
		initialCardItem.appendChild(del).classList.add('buttn')
		initialCardItem.appendChild(del).innerHTML = elem.button
	})
	
	cardList = [...cardList, initialCardItem]
	//**2.Card deleting**THIS HAVE TO BE DONE WITH FILTER METHOD**
	const deletingCardItem = ()=>{
		del.addEventListener('click', (e)=>{
			if(e.target.tagName === 'BUTTON'){
				initialCardItem.remove()
		}
		})	
	}


	//**3.Card Marking**
	let i = false
	const markingCardItem = ()=>{
		checking.addEventListener('click', (e)=>{
			if(e.target.tagName === 'INPUT'){
				if(i == false){
				initialCardItem.style.textDecoration = 'line-through'
				i = true
				}
				else{
					initialCardItem.style.textDecoration = 'none'
					i = false
				}
		}
		})	
	}
	
	deletingCardItem()
	markingCardItem()
}





//**4.New card adding**
let ids = 2
inp.addEventListener('keydown', (event)=>{
	if(event.keyCode == 13){
		var newCardState = {
			id:ids,
			title:inp.value,
			checked:false,
			button:'-',
			del:false
		}
		ids++
	data = [...data, newCardState]
	inp.value = ''
	return cardMaking()	
	}
})


cardMaking()