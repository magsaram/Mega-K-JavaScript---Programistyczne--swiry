class Country {
  constructor(place, name) {
    this.place = place;
    this.name = name;
  }
  addPlace(newPlace) {
    this.place.push(newPlace);
  }
  checkMedals() {
    if (this.place.includes(1)) {
      console.log(`Brawo! ${this.name} ma złoty medal!`);
    } else {
      console.log(`Niestety, ${this.name} nie ma złotych medali.`);
    }
  }
}
const poland = new Country([1, 2, 4], "Polska");
const finland = new Country([5], "Finlandia");
const usa = new Country([], "USA");

usa.addPlace(2);
finland.addPlace(1);

console.log(poland.checkMedals());
console.log(finland.checkMedals());
console.log(usa.checkMedals());
