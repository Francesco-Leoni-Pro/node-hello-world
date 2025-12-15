console.log("Hello World!");

const argomento = process.argv[2];

console.log("Hello " + argomento);

import chalk from 'chalk';

const argomento2 = process.argv[2];

console.log(chalk.green('Hello') + ' ' + chalk.bgBlue(argomento2));