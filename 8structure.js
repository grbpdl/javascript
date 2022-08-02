//structure is combinations of strings, numbers, booleans, arrays, functions, and objects.
const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  //ascessing using dot or brackets
    console.log(ourPets[1].names[0],ourPets[0].names[1]);