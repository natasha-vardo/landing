let select = function () {
	let selectHeader = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item'),
		select = document.querySelector('.content-order-form__select');

	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle) 
	});

	selectItem.forEach(item => {
		item.addEventListener('click', selectValue) 
	});

	function selectToggle() {
		this.parentElement.classList.toggle('is-active');
	}

	function selectValue() {
		let currentValue = this.innerText,
			selectBody = this.closest('.content-order-form__select'),
			currentText = selectBody.querySelector('.select__current');

		currentText.innerText = currentValue;
		selectBody.classList.remove('is-active');
	}

	document.addEventListener('mouseup', (e) =>{
    if (!select.contains(e.target))	{
			select.classList.remove('is-active');
		}
  });
};

select();
