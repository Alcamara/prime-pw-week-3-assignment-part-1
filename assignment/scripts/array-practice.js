console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals 
let animalArray = ['fish', 'cat', 'bird', 'dog']; 
console.log('Animals are: ', animalArray); 

// 1.a. TODO: Make an array with some favorite foodss 
let foods = ['Chicken','Pizza','Ramen','Pad Thai'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('my favorite foods are:', foods);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foodss in your array
console.log('Number of food items in the array is', foods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log('Second animal in the animal array is',animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal in the animal array is',animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Last animal in the animal array is',animalArray[animalArray.length - 1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new foodss at the end of your array & log the array
foods.push('Pho');
console.log('This new item was added to food array:',foods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the foods at the end of your array & 
//      log both the foods removed and the updated array
let removefoodItem = foods.pop();
console.log('The last food item that was removed is', removefoodItem);
console.log('Now the food items in the array are', foods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a foods at the beginning of the array & log the array
 foods.unshift('Mac & cheese')
 console.log('Added a foods at the beginning of the array', foods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the foods at the beginning of your array & 
//     log both the foods removed and the updated array
    removefoodItem = foods.shift();
    console.log('The item that was removed at beginning of the food array is',removefoodItem);
    console.log('Now the food items in the array are', foods);
// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
    foods[1] = 'Fried Fish';
    console.log('New updated food array', foods);

// 4.f (STRETCH) TODO: Sort your favoritefoodss array
//     in reverse alphabetical order. Log the array.
        console.log(foods.reverse());
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
        console.log(foods.join(' and '));

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

const newArr = foods.concat(animalArray);
console.log(newArr);

