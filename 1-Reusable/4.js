'use script';

let object1 = {
  name: `Nick`,
};

let object2 = {
  name: `Nick`,
};

object1.name = `Kate`;
object2.name = `Rudyk`;

console.log(object1.name, object2.name);

// Ми дали полям name інші значення і вивели їх через console.log

const createUser = (name, city) => {
  const object = {
    name: name,
    city: city,
  };
  console.log(object);
};

// edit 4

createUser(`Marcus Aurelius`, `Roma`);
