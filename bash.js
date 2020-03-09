process.stdout.write('prompt > ');
process.stdin.on('data',(data)=> {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\n >');
    if(cmd === "pwd"){
        // process.stdout.write(process.env.PWD);
        // process.stdout.write('\n >');
        // pwd.func();
        pwd();
    } else if (cmd === 'ls') {
        process.stdout.write('test');
        ls();
    }
    process.stdout.write('\n >');
});

const pwd = require('./pwd.js');
const ls = require('./ls.js')

//process.stdout.write('You typed:' + cmd);
