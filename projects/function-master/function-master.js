//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    const objVals = [];
    for (let key in object) {
        objVals.push(object[key]);
    }
    return objVals;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    const keys = [];
    for (var key in object) {
        keys.push(key);
    }
    return keys.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var vals = [];
    for (var key in object) {
        typeof object[key] === 'string' ? vals.push(object[key]) : false;
    }
    return vals.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    return Array.isArray(collection) ? 'array' : 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let chars = string.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    const words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let name = object.name.split('');
    name[0] = name[0].toUpperCase();
    return `Welcome ${name.join('')}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let name = object.name.split('');
    name[0] = name[0].toUpperCase();
    let species = object.species.split('');
    species[0] = species[0].toUpperCase();
    return `${name.join('')} is a ${species.join('')}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(' ');
    }
    return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    const words = string.split(` `);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word){
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    if (Array.isArray(object.friends)) {
        for (let i = 0; i < object.friends.length; i++) {
            if (object.friends[i].toLowerCase() === name.toLowerCase()) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // return a list of names of people 'name' is not friends with
    var nonFriends = []; // list of names of non-friends found
    // need to aquire array of people that are friends of name from array
    var friendsOfName = []; // working
    for (let i = 0; i < array.length; i++) { // need to iterate until we aquire the user object's friends from the name string
        if (array[i].name === name) {
            friendsOfName = array[i].friends;
        }
    }
    // then need to add all people in array that arent on the friends list
    for (let i = 0; i < array.length; i++) { 
        let user = array[i]; // will go through every user profile in array
        let shouldPushUser = true;
        // console.log('user', user);
        // if user.name is not name, and it is not in the friendsOfName list, push it to nonfriends
        if (user.name === name) {
            shouldPushUser = false; // shouldnt push user because it is the name user
        } else {
            // iterate through friendsOfName and if any name matches the user's name it shouldnt be pushed to nonfriends
            for (let j = 0; j < friendsOfName.length; j++) {
                let friendName = friendsOfName[j];
                if (friendName === user.name) { // then the user is a friend and shouldnt be pushed
                    shouldPushUser = false;
                }
            }
        }
        if (shouldPushUser) {
            nonFriends.push(user.name);
        }
    }
    return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // Should remove any properties on <object> that are listed in <array>
    for (let i = 0; i < array.length; i++) {
        delete object[array[i]];
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // Should take an array and return an array with all the duplicates removed
    const deduped = [];
    // for loop on array that checks deduped for the value and if not there at the end of deduped loop, push
    for (let i = 0; i < array.length; i++) {
        // for every value in array we will check if it's a dupe
        let val = array[i];
        let isDupe = false;
        for (let j = 0; j < deduped.length; j++) {
            let dedupedVal = deduped[j];
            if (dedupedVal === val) {
                isDupe = true;
            }
        }
        if (isDupe === false) {
            deduped.push(val);
        }
    }
    return deduped;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}