let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  let getAge = pet => new Date().getFullYear() - pet.bornOn;
  
  
  let petsWithAge = [];
  pets.forEach(pet=>{
  pet.age = getAge(pet);
  
  petsWithAge.push(pet);})
  
  console.log(petsWithAge);
  
  let dogs= pets.filter(pet=>{ return pet.type === "dog";})
  
  console.log(dogs);
  
  let jasper;
  pets.find(pet=>{
      pet.name === "Jasper";
     jasper = pet;})
  
  console.log(`Jasper is  ${jasper.age} years old`);