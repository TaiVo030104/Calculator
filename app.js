
function isValidDecimal(number) {
    return !isNaN(number) && number.trim() !== '';
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const number1 = document.getElementById('number1').value.trim();
    const number2 = document.getElementById('number2').value.trim();
    const operation = document.querySelector('input[name="operation"]:checked');
    const resultField = document.getElementById('result');
    const messageField = document.getElementById('message');

    messageField.textContent = '';
    resultField.value = '';

    if (!isValidDecimal(number1)) {
        messageField.textContent = 'Giá trị nhập ở ô Số thứ nhất không phải là số hợp lệ.';
        return;
    }
    if (!isValidDecimal(number2)) {
        messageField.textContent = 'Giá trị nhập ở ô Số thứ hai không phải là số hợp lệ.';
        return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!operation) {
        messageField.textContent = 'Vui lòng chọn một phép tính.';
        return;
    }

    let result;
    switch (operation.value) {
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
                messageField.textContent = 'Không thể chia cho 0.';
                return;
            }
            result = num1 / num2;
            break;
    }
    resultField.value = result;
});

document.getElementById('number1').addEventListener('blur', function() {
    const messageField = document.getElementById('message');
    const number1 = this.value.trim();
    if (!isValidDecimal(number1)) {
        messageField.textContent = 'Giá trị nhập ở ô Số thứ nhất không phải là số hợp lệ.';
    } else {
        messageField.textContent = ''; 
    }
});

document.getElementById('number2').addEventListener('blur', function() {
    const messageField = document.getElementById('message');
    const number2 = this.value.trim();
    if (!isValidDecimal(number2)) {
        messageField.textContent = 'Giá trị nhập ở ô Số thứ hai không phải là số hợp lệ.';
    } else {
        messageField.textContent = ''; 
    }
});
