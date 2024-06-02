#!/usr/bin/env node
// countdown.ts
import inquirer from 'inquirer';

async function startCountdown() {
    const { duration } = await inquirer.prompt([
        {
            type: 'number',
            name: 'duration',
            message: 'Enter the countdown duration in seconds:',
            validate: (input) => input > 0,
        },
    ]);

    let counter = duration;

    const intervalId = setInterval(() => {
        counter--;
        console.log(`Time remaining: ${counter} seconds`);

        if (counter === 0) {
            clearInterval(intervalId);
            console.log('Countdown complete!');
        }
    }, 1000);
}

startCountdown();
