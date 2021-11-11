let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//display the names of the people who belong to the Gryffindor house.
function filterWizards (wizards) {
  wizards.forEach((wizard) => {
    const { firstName, lastName, house } = wizard;
    if (house == "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

console.log("Exercise1 solution:");
filterWizards(hogwarts);



//display the names of teachers who have pets.
function filterTeachersPet(wizards) {
  wizards.forEach((wizard) => {
    const { firstName, lastName, pet, occupation } = wizard;
    if (occupation == "Teacher" && pet != null) {
      console.log(`${firstName} ${lastName}`);
    }
  });
}

console.log("Exercise2 solution:")
filterTeachersPet(hogwarts);