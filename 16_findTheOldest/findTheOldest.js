const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();
    const ages = people.map(person => {
        if ('yearOfDeath' in person) {
            return {
                name: person.name,
                age: person.yearOfDeath - person.yearOfBirth,
            }
        } else {
            return {
                name: person.name,
                age: currYear - person.yearOfBirth,
            }
        }
    });
    const oldestPerson = ages.reduce((prev, curr) => {
        return (curr.age > prev.age) ? curr : prev;
    });
    return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
