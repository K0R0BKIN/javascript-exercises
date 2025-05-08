const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();
    const ages = people.map(({ name, yearOfBirth, yearOfDeath }) => ({
        name,
        age: yearOfDeath ? yearOfDeath - yearOfBirth : currYear - yearOfBirth
    }));
    
    return ages.reduce((prev, curr) => curr.age > prev.age ? curr : prev);
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
