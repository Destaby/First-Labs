`use script`;

let hash = {
  'Marcus Aurelius': '+380445554433',
  'Doesn`t matter': '+380982713276',
  Again: '+380999999999',
  'That`s boring': '+380000000000',
};

let findPhoneByName = name => {
  for (const x in hash) {
    if (x == name) {
      console.log(hash[x]);
    }
  }
};

findPhoneByName(`Again`);

// edit 8
