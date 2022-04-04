const readline = require("readline-sync");

const validItems = ["banana", "blood", "ink", "frog", "sky", "salt", "apple"];

const colors = {
  green: ["banana", "apple"],
  yellow: ["banana", "frog"],
  red: ["blood", "ink", "apple"],
  black: ["ink", "sky"],
  white: ["salt"],
  blue: ["frog", "sky"],
};

class Item {
  constructor(item) {
    this.item = item;
  }

  printStatement(color) {
    if (this.item == "frog") {
      console.log(`I'm Frog! I'm ${color} today.`);
    } else {
      console.log(`I'm ${this.item[0].toUpperCase() + this.item.slice(1)}! I'm sometimes ${color}.`);
    }
  }
}

class Event {
  constructor() {
    this.subscribedItems = {};
  }

  subscribe(item) {
    const newItem = new Item(item);
    printDivider();
    this.subscribedItems[item] = newItem;
    console.log(`Successfully subscribed to ${item}`);
  }

  unsubscribe(item) {
    delete this.subscribedItems[item];
    printDivider();
    console.log(`Successfully unsubscribed to ${item}`);
  }

  printSubscribedItems() {
    printDivider();
    Object.keys(this.subscribedItems).forEach((item) => console.log(item));
  }

  printShoutout(color) {
    const items = colors[color];
    printDivider();
    items.forEach((item) => this.subscribedItems[item].printStatement(color));
  }
}

const printDivider = () => console.log(`------------------------------------------------------`);

(() => {
  const event = new Event();
  while (true) {
    printDivider();

    console.log("Enter a command");

    let userCommand = readline.question();

    if (userCommand[0] === "+" && validItems.includes(userCommand.slice(1))) {
      event.subscribe(userCommand.slice(1));
    } else if (userCommand[0] === "-" && validItems.includes(userCommand.slice(1))) {
      event.unsubscribe(userCommand.slice(1));
    } else if (userCommand === "list") {
      event.printSubscribedItems();
    } else if (Object.keys(colors).includes(userCommand)) {
      event.printShoutout(userCommand);
    } else if (userCommand === "exit") {
      printDivider();
      console.log(`Exiting.....`);
      break;
    } else {
      printDivider();
      console.log(`Invalid input`);
    }
  }
})();
