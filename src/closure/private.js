const person = () => {
  let saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();
console.log(newPerson.getName());

newPerson.setName("Jaime");
console.log(newPerson.getName());
