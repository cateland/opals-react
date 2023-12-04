export type Donation = {
    id: string;
    emoji: string;
    item: string;
    quantity: number;
    expirationDelay: number;
};

export interface SortOptions {
    sortBy: "id" | "item" | "quantity" | "expirationDelay";
    sortOrder: "asc" | "desc";
}

const donationItems = [
    { emoji: "☕️", item: "Coffee" },
    { emoji: "🥛", item: "Milk" },
    { emoji: "🥩", item: "Beef" },
    { emoji: "🍗", item: "Chicken" },
    { emoji: "🍖", item: "Pork" },
    { emoji: "🍗", item: "Turkey" },
    { emoji: "🥔", item: "Potatoes" },
    { emoji: "🥣", item: "Cereal" },
    { emoji: "🥣", item: "Oatmeal" },
    { emoji: "🥚", item: "Eggs" },
    { emoji: "🥓", item: "Bacon" },
    { emoji: "🧀", item: "Cheese" },
    { emoji: "🥬", item: "Lettuce" },
    { emoji: "🥒", item: "Cucumber" },
    { emoji: "🐠", item: "Smoked Salmon" },
    { emoji: "🐟", item: "Tuna" },
    { emoji: "🐡", item: "Halibut" },
    { emoji: "🥦", item: "Broccoli" },
    { emoji: "🧅", item: "Onions" },
    { emoji: "🍊", item: "Oranges" },
    { emoji: "🍯", item: "Honey" },
    { emoji: "🍞", item: "Sourdough Bread" },
    { emoji: "🥖", item: "French Bread" },
    { emoji: "🍐", item: "Pear" },
    { emoji: "🥜", item: "Nuts" },
    { emoji: "🍎", item: "Apples" },
    { emoji: "🥥", item: "Coconut" },
    { emoji: "🧈", item: "Butter" },
    { emoji: "🧀", item: "Mozzarella" },
    { emoji: "🍅", item: "Tomatoes" },
    { emoji: "🍄", item: "Mushrooms" },
    { emoji: "🍚", item: "Rice" },
    { emoji: "🍜", item: "Pasta" },
    { emoji: "🍌", item: "Banana" },
    { emoji: "🥕", item: "Carrots" },
    { emoji: "🍋", item: "Lemons" },
    { emoji: "🍉", item: "Watermelons" },
    { emoji: "🍇", item: "Grapes" },
    { emoji: "🍓", item: "Strawberries" },
    { emoji: "🍈", item: "Melons" },
    { emoji: "🍒", item: "Cherries" },
    { emoji: "🍑", item: "Peaches" },
    { emoji: "🍍", item: "Pineapples" },
    { emoji: "🥝", item: "Kiwis" },
    { emoji: "🍆", item: "Eggplants" },
    { emoji: "🥑", item: "Avocados" },
    { emoji: "🌶", item: "Peppers" },
    { emoji: "🌽", item: "Corn" },
    { emoji: "🍠", item: "Sweet Potatoes" },
    { emoji: "🥯", item: "Bagels" },
    { emoji: "🥫", item: "Soup" },
    { emoji: "🍪", item: "Cookies" },
];

const donations: Array<Donation> = [];

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueID(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

/**
 * Generates a list of Donation, each call generate a new different list
 */
export function list(): Array<Donation> {
    if (donations.length > 0) {
        return donations;
    }

    for (let index = 0; index < 200; index++) {
        // get random item from donationItems
        const randomItem = donationItems[getRandomInt(0, donationItems.length - 1)];

        // create an object using emoji and item with randomized quantity between 1 and 20 
        // and an expiration delay between 1 and 30
        const donation = {
            id: generateUniqueID(),
            emoji: randomItem.emoji,
            item: randomItem.item,
            quantity: getRandomInt(1, 20),
            expirationDelay: getRandomInt(1, 30)
        };
        donations.push(donation);
    }
    return donations;
}

/**
 * Generates a comparator function for sorting Donation objects based on a specified attribute and order.
 */
export function compareValues(key:  SortOptions["sortBy"], order: SortOptions["sortOrder"] = "asc") {
    return function innerSort(a: Donation, b: Donation) {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !Object.prototype.hasOwnProperty.call(b, key)) {
            // property doesn't exist on either object
            return 0;
        }
        const aValue = a[key];
        const bValue = b[key];

        const varA = typeof aValue === "string" ? aValue.toUpperCase() : aValue;
        const varB = typeof bValue === "string" ? bValue.toUpperCase() : bValue;

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
}

export function updateDonationQuantity(
    donations: Array<Donation>,
    donationId: string,
    newQuantity: number
): Array<Donation> {
    if (newQuantity <= 0) {
        // Remove the donation if the new quantity is 0 or less
        return donations.filter((donation) => donation.id !== donationId);
    } else {
        // Update the quantity of the specified donation
        return donations.map((donation) => {
            if (donation.id === donationId) {
                return { ...donation, quantity: newQuantity };
            }
            return donation;
        });
    }
}
