document.getElementById('calculateButton').addEventListener('click', function() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const operation = document.querySelector('input[name="operation"]:checked').value;
    const resultField = document.getElementById('result');
    const messageField = document.getElementById('message');
    
    let result;
    
    // Clear previous messages
    messageField.textContent = '';
    
    // Validate inputs
    if (isNaN(number1)) {
        messageField.textContent = 'Giá trị nhập ở ô Số thứ nhất không phải là số';
        return;
    }
    if (isNaN(number2)) {
        messageField.textContent = 'Giá trị nhập ở ô Số thứ hai không phải là số';
        return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    
    // Perform calculation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                messageField.textContent = 'Không thể chia cho 0';
                return;
            }
            result = num1 / num2;
            break;
    }
    
    resultField.value = result;
});
