// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = val => val;

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = (val) => {
    if (Array.isArray(val)) {
        return 'array';
    } else if (val === null) {
        return 'null';
    }
    return typeof val;
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = (arr, num) => {
    if (!Array.isArray(arr) || arr.length === 0 || num < 0) { // not an array? return empty
        return [];
    } else if (num <= 1 || num === NaN || num === undefined) { // if not a number or neg num ret 1st val
        return arr[0];
    } else {
        // make fun happen
        return arr.slice(0, num);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = (arr, num) => {
    if (!Array.isArray(arr) || num < 0) { // if arr is !array return [] or num is neg
        return [];
    } else if (num === undefined || num === NaN || num <= 1) { // if num isnt a num or is 0 or 1 return last el
        return arr[arr.length -1];
    } else {
        return arr.splice(-num); // the negative version of num would return x elements from end of array
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = (arr, val) => {
    let containsVal = _.indexOf(arr, val) > -1 ? true : false;
    return containsVal;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = (coll, func) => {
    if (Array.isArray(coll)) { // coll === array
        for (let i = 0; i < coll.length; i++) {
            func(coll[i], i, coll);
        }
    } else { // coll === object
        for (let key in coll) {
            func(coll[key], key, coll);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = (arr) => {
    const uniqVal = [];
    _.each(arr, (val, i, arr) => {
        // all vals of arr
        let isUniq = true;
        // test against all shits in uniqVal
        _.each(uniqVal, (val1, i1, arr1) => {
            if (val === val1) {
                isUniq = false;
            }
        });
        if (isUniq) {
            uniqVal.push(val);
        }
    }); 
    return uniqVal;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = (arr, func) => {
    const tru = [];
    _.each(arr, (val, i, ar) => {
        if (func(val, i, ar)) {
            tru.push(val);
        }
    });
    return tru;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = (arr, func) => {
    const untrue = [];
    _.each(arr, (val, i, ar) => {
        if (!func(val, i, ar)) {
            untrue.push(val);
        }
    });
    return untrue;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = (arr, func) => {
    const truthy = [];
    const untruthy = [];
    _.each(arr, (val, i, coll) => {
        if (func(val, i, coll)) {
            truthy.push(val);
        } else {
            untruthy.push(val);
        }
    });
    return [truthy, untruthy];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = (coll, func) => {
    const newArr = []
    _.each(coll, (val, i, coll) => {
        newArr.push(func(val, i, coll));
    });
    return newArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = (arrOfObj, property) => {
    return _.map(arrOfObj, (obj, prop, arrOfObj) => {
        return obj[property];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = (coll, func) => {
    // i need to plan every step of this with pseudocode before coding
    // call func on every el of coll
    // if at the end of the  collection and the return is not false return true
    let everyVal = true;
    // iterate trhough coll 
    _.each(coll, (el, i, coll) => {
        // console.log('each vars', el, i, coll)
        if (typeof func === 'function' && !func(el, i, coll)) { // if func is a function use it
            everyVal = false;
        } else if (!el) { // else base on truthiness
            everyVal = false;
        }
    });
    return everyVal;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = (coll, func) => {
    // if one thing is true return true
    let bool = false;
    if (typeof func === 'function') {
        _.each(coll, (el, i, coll) => {
            if (func(el, i, coll)) {
                return bool = true;
            }
        });
    } else {
        _.each(coll, (el, i, coll) => {
            if (el) {
                return bool = true;
            }
        });
    }
    return bool;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = (arr, func, seed, i = 0) => { // If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
    // Use the return value of <function> as the "previous result" for the next iteration
    if (seed === undefined) {
        seed = arr[0];
        i++;
    }
    let prevResultForNextIteration = func(seed, arr[i], i);
    i++; // prep i for next recursive call
    if (i === arr.length) {
        return prevResultForNextIteration;
    }
    return _.reduce(arr, func, prevResultForNextIteration, i);
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = (obj1, obj2, obj3) => {
    // takes in an infinite amount of objects
    console.log()
    for (let key in obj2) {
        delete obj1[key];
        obj1[key] = obj2[key];
    }
    if (obj3 !== undefined) {
        for (let key in obj3) {
            delete obj1[key];
            obj1[key] = obj3[key];
        }
        
    }
    return obj1;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
