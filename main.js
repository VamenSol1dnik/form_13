const buyButton = document.getElementById('buy-button');

buyButton.addEventListener('click', function() {
  showOrderForm();
});

function showOrderForm() {
    // Створюємо форму
    const form = document.createElement('form');
  
    // Додаємо поля для введення інформації про покупця
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'ПІБ покупця');
    form.appendChild(nameInput);
  
    const citySelect = document.createElement('select');
    citySelect.setAttribute('name', 'city');
    const cities = ['Київ', 'Львів', 'Одеса', 'Харків', 'Дніпро'];
    for (let i = 0; i < cities.length; i++) {
      const cityOption = document.createElement('option');
      cityOption.setAttribute('value', cities[i]);
      cityOption.textContent = cities[i];
      citySelect.appendChild(cityOption);
    }
    form.appendChild(citySelect);
  
    const novaPoshtaInput = document.createElement('input');
    novaPoshtaInput.setAttribute('type', 'text');
    novaPoshtaInput.setAttribute('name', 'nova-poshta');
    novaPoshtaInput.setAttribute('placeholder', 'Склад Нової пошти для надсилання');
    form.appendChild(novaPoshtaInput);
  
    // Додаємо поля для введення інформації про замовлення
    const paymentSelect = document.createElement('select');
    paymentSelect.setAttribute('name', 'payment');
    const paymentOptions = ['Післяплата', 'Оплата банківською карткою'];
    for (let i = 0; i < paymentOptions.length; i++) {
      const paymentOption = document.createElement('option');
      paymentOption.setAttribute('value', paymentOptions[i]);
      paymentOption.textContent = paymentOptions[i];
      paymentSelect.appendChild(paymentOption);
    }
    form.appendChild(paymentSelect);
  
    const quantityInput = document.createElement('input');
    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('name', 'quantity');
    quantityInput.setAttribute('placeholder', 'Кількість продукції що купується');
}