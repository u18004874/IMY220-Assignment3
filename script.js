// year/month/day
var events = [
    { name: "University expo", description: "Expo to showcase University degrees", dateStart: "2022/02/01", dateEnd: "2022/02/14" },
    { name: "Market", description: "Farmer's market day long event", dateStart: "2022/06/12", dateEnd: "2022/06/12" },
    { name: "Science Expo", description: "Science expo with sciency stuff", dateStart: "2022/06/12", dateEnd: "2022/06/21" },
    { name: "Hiking trip", description: "Hiking trip with a bunch of University friends", dateStart: "2022/02/14", dateEnd: "2022/02/16" },
    { name: "Music festival", description: "Weekend long music festival with a ton of artists performing", dateStart: "2022/05/13", dateEnd: "2022/05/15" },
    { name: "Park Picnic", description: "Picnic event in the park", dateStart: "2022/06/12", dateEnd: "2022/06/12" }
];

// TEST DATA

//getEventsBetweenDates(start, end)
var eventsObj = new EventHandler(events);
var eventsRange = eventsObj.getEventsBetweenDates("2022/02/01", "2022/02/16");
console.log(eventsRange);

//getByMonth(month)
var monthObj = new EventHandler(events);
var eventsMonth = monthObj.getByMonth(05);
console.log(eventsMonth);

//getUniqueDateAndSort()
var sortObj = new EventHandler(events);
var eventsSort = sortObj.getUniqueDateAndSort();
console.log(eventsSort);

//getSummary() single Array of objects
console.log("No Args");
var summary = new EventHandler(events);
var arraySummary = summary.getSummary();
console.log(arraySummary);

//getSummary() Single Array
console.log("Single Array");
var summaryEv = new EventHandler(events);
var arrayEvSummary = summaryEv.getSummary(events);
console.log(arrayEvSummary);


console.log("One object");
var summaryAny = new EventHandler(events);
var arrayAnySummary = summaryAny.getSummary({
    name: 'Pizza party', description: "Pizza party at work",
    dateStart: '2022/07/10', dateEnd: '2022/07/10'
});
console.log(arrayAnySummary);

//getSummary() Any number of objects
console.log("Any number of object");
var summaryAny = new EventHandler(events);
var arrayAnySummary = summaryAny.getSummary({
    name: 'Pizza party', description: "Pizza party at work",
    dateStart: '2022/07/10', dateEnd: '2022/07/10'
}, { name: 'Market', description: "Farmer's market day long event", dateStart: "2022/06/12", dateEnd: "2022/06/12" });
console.log(arrayAnySummary);

//Prototype

console.log("Prototype");
var handler = new EventHandler(events);
var ChainedObj = handler.getByMonth(06).getSummary();
console.log(ChainedObj);