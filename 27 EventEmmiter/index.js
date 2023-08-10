const { Restaurant } = require("./restaurant");

const megaRestaurant = new Restaurant();
let tablesCount = 25;

megaRestaurant
  .on("open", () => {
    console.log(`Otwarto restaurację, dostępne stoliki: ${tablesCount}`);
  })
  .on(`close`, () => {
    console.log(`Zamknięto restaurację, dostępne stoliki: ${tablesCount}`);
  })
  .on("change", (numberOfTables) => {
    tablesCount += numberOfTables;
    console.log(`Zmiany! Liczba dostępnych stolików: ${tablesCount}`);
  });

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."
