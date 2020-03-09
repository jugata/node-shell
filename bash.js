process.stdout.write('prompt > ');
process.stdin.on('data',(data)=> {
    const cmd = data.toString().trim();
    process.stdout.write('You typed:' + cmd);
    process.stdout.write('\n >');
    if(cmd === "pwd"){
        process.stdout.write(process.env.PWD);
        process.stdout.write('\n >');
    }
    process.stdout.write('\n >');   
})

//process.stdout.write('You typed:' + cmd);