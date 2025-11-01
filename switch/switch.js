let favMonth = prompt("What is your favorite month?").toLowerCase();
switch (favMonth) {
    case "january":
        console.log("January: Happy New Year!");
        break;
    case "february":
        console.log("February: This is my Birthday Month!");
        break;
    case "march":
        console.log("March: Happy St. Patricks Day!");
        break;
    case "april":
        console.log("April: April showers bring May flowers!");
        break;
    case "may":
        console.log("May: School's out for summer!");
        break;
    case "june":
        console.log("June: Summer fun has just begun!");
        break;
    case "july":
        console.log("July: Happy Independence Day!");
        break;
    case "august":
        console.log("August: Summer is almost over, it's almost time to go back to school!");
        break;
    case "september":
        console.log("September: Fall is almost here!");
        break;
    case "october":
        console.log("October: Spooky season is here!");
        break;
    case "november":
        console.log("November: Gobble Gobble!");
        break;
    case "december":
        console.log("December: Merry Christmas!");
        break;
    default:
        console.log("That does not seem like a valid month, try again!");
}
if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
    console.log("You love the winter months!");
}
else if (favMonth === "june" || favMonth === "july" || favMonth ==="august") {
    console.log("You enjoy the summer months!");
}
else  {
    console.log("Other months are interesting too!");
}