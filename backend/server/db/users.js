const myPlaintextPassword = 'i_love_cheese';
const passwordHash = 'dousahdushk';

const users = [
  {
    first_name: 'A.J.',
    last_name: 'Uppal',
    email: 'auppal@umass.edu',
    password: myPlaintextPassword,
    passwordHash: passwordHash,
  },
];

exports.findByUsername = function (username, cb) {
  process.nextTick(function () {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].email, username);
      if (users[i].email === username) {
        return cb(null, users[i]);
      }
    }
    return cb(null, null);
  });
};
