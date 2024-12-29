const readline = require('readline');

class Calculator {
    add(...args) {
        return args.reduce((acc, val) => acc + val, 0);
    }

    subtract(...args) {
        return args.reduce((acc, val) => acc - val);
    }

    multiply(...args) {
        return args.reduce((acc, val) => acc * val, 1);
    }

    divide(...args) {
        return args.reduce((acc, val) => {
            if (val === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return acc / val;
        });
    }
}

const calculator = new Calculator();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter the numbers separated by space: ', (input) => {
        const numbers = input.split(' ').map(Number);
        let result;
        try {
            switch (operation.toLowerCase()) {
                case 'add':
                    result = calculator.add(...numbers);
                    break;
                case 'subtract':
                    result = calculator.subtract(...numbers);
                    break;
                case 'multiply':
                    result = calculator.multiply(...numbers);
                    break;
                case 'divide':
                    result = calculator.divide(...numbers);
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
        rl.close();
    });
});
