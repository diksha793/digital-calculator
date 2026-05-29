const screen = document.getElementById('screen');

function appendValue(value) {
    if (screen.value === '0' || screen.value === 'Error') {
        screen.value = value;
    } else {
        screen.value += value;
    }
}

function clearScreen() {
    screen.value = '0';
}

function backspace() {
    if (screen.value === 'Error') {
        screen.value = '0';
    } else {
        screen.value = screen.value.slice(0, -1);
        if (screen.value === '') {
            screen.value = '0';
        }
    }
}

function calculate() {
    try {
        if (screen.value === '' || screen.value === 'Error') {
            return;
        }

        let result = eval(screen.value);

        // Yahan par 'isNaN' bilkul sahi kar diya gaya hai
        if (result === undefined || isNaN(result)) {
            screen.value = 'Error';
            return;
        }

        result = parseFloat(result);
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(4));
        }

        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}
