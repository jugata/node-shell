


// const pwdRun = () => {
//   process.stdout.write(process.env.PWD);
//   process.stdout.write('\n >');


// };

// module.exports.func = pwdRun;

module.exports = function() {
  process.stdout.write(process.env.PWD);
  process.stdout.write('\n >');

}
