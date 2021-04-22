function findMatching(collection, value) {
  const newCollection = collection.filter(person => person === value);
  return newCollection;
}

function fuzzyMatch(collection, value) {
  const newCollection = collection.filter((person) => person === value);
  return newCollection;
}

function matchName(collection, value) {
  return collection.filter( data => data.name === value)
} 



// function findMatching (collection, value) {
//     const newCollection = [];
  
//     for (const person of collection) {
//       if (person === value) {
//         newCollection.push(person);
//       }else(false)
//     }
  
//     return newCollection;
// }


// function fuzzyMatch(collection, value) {
//   const nextCollection = [];

//   for (const person of collection) {
//     if (person === value) {
//       nextCollection.push(person);
//     }
//   }

//   return nextCollection;
// }

// Code your solution here
// function findMatching (collection, attribute, value) {
//     for (const name of collection) {
//         if (name[attribute] === value){
//         return [name];
//         }
//     }
// }