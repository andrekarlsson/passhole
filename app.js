var program = require('commander');

program
  .version('0.0.1')
  .option('-c, --create', 'Create new database')
  .option('-a, --add', 'Add new login')
  .parse(process.argv);

console.log('chosen:');
if (program.create) console.log('create new database');
if (program.add) console.log('add login');
