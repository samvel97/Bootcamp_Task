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
	data.map(elem=>{
		let del = document.createElement('button')
		let checking = document.createElement('input')
		checking.setAttribute("type", "checkbox");
		cardBlock.appendChild(initialCardItem).innerHTML = elem.title
		cardBlock.appendChild(initialCardItem).classList.add('cardItem')
		cardBlock.appendChild(initialCardItem).setAttribute('id', elem.id)
		initialCardItem.appendChild(checking).checked = elem.checked
		initialCardItem.appendChild(checking).classList.add('checking')
		initialCardItem.appendChild(del).classList.add('buttn')
		initialCardItem.appendChild(del).innerHTML = elem.button
	})


	//**2.Card deleting**THIS HAVE TO BE DONE WITH FILTER METHOD**
	const deletingCardItem = ()=>{
		cardList = [...cardList, initialCardItem]
	const deletCardItem = cardList.map(elem=>elem.lastElementChild.addEventListener('click', ()=>{elem.style.display = 'none'}))	
	}

	//**3.Card Marking**THIS HAVE TO BE DONE WITH FILTER METHOD**
	const markingCardItem = ()=>{
		cardList = [...cardList, initialCardItem]
	const markCardItem = cardList.map(elem=>elem.firstElementChild.addEventListener('click', ()=>{elem.style.textDecoration = 'line-through'})) //**THIS HAVE TO BE DONE WITH FILTER METHOD**
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