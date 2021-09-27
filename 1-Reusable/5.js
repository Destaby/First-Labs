`use strict`;

const array = [
  { name: `Marcus Aurelius`, phone: `+380445554433` },
  { name: `Doesn\`t matter`, phone: `+380982713276` },
  { name: `Again`, phone: `+380999999999` },
  { name: `That\`s boring`, phone: `+380000000000` },
];

let findPhoneByName = name => {
  for (let i = 0; i < array.length; i++) {
    if (name == array[i].name) {
      console.log(array[i].phone);
    }
  }
};
findPhoneByName(`That\`s boring`);

// edit 4
