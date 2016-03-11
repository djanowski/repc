const spawn = require('child_process').spawn;


module.exports = function run(program, args) {
  return new Promise(function(resolve, reject) {
    const command = spawn(program, args);

    command.stdout.on('data', function(data) {
      console.log(data.toString());
    });

    command.stderr.on('data', function(data) {
      console.log(data.toString());
    });

    command.on('close', function(code) {
      console.log(`${program}: exited with code ${code}`);
      if (code === 0)
        resolve();
      else
        reject(new Error(`${program} exited with code ${code}`));
    });
  });
};
