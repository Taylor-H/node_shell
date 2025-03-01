
//output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();// remove the newline
if(cmd === 'pwd'){
    process.stdout.write(process.cwd())
    process.stdout.write('\nprompt > ');
}else{

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
}

});


// we can access the pwd function and store it in a variable like so
// const pwd = require('./pwd');

// // if a user enters 'pwd' as an argument, we can then call it
// pwd();
// console.log(`Current directory: ${cwd()}`);
// process.cwd()
