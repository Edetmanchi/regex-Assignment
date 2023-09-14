// regex golf
/*
function regExp(){
    // 1. car and cat
   function carAndCat(){
    let word = /ca[rt]/
    let match1 = word.test("car")
    return match1
    console.log(match1)
   }
    // 2. pop and prop:
    function popAndProp(){
        let popping = /pr?op/
        match2 = popping.test("pop")
        return match2 
        console.log(match2)
    }


    // 3. ferret, ferry, and ferrari:
    function ferret(){
        let farry = /ferr(et|y|ari)/
        match3 = farry.test("ferrari")
        return match3
        console.log(match3)

    }

    // 4. Any word ending in ious:

    function edible(){     
        let food = /\w+ious\b/
        match4 = food.test("delicious");
        return match4
        console.log(match4)

    }


    // 5. A whitespace character followed by a period, comma, colon, or semicolon:
    function whitespace(){
        let space = /\s[.,:;]/
        match5 = space.test(" .")
        return match5
        console.log(match5)
    }


    // 6. A word longer than six letters:
    function test(){      
        let longText = /\w{7,}/
        match6 = longText.test("eatingFood")
        return match6
        console.log(match6)
    }

    // 7. A word without the letter e (or E):

    function exception(){   
        let noE = /\b[^\We]+\b/
        match7 = noE.test("paul")
        return match7 
        console.log(match7)
  
    }

    carAndCat()
    popAndProp()
    ferret()
    edible()
    whitespace()
    test()
    exception()
}

function regExp(){
    // 1. car and cat
   function carAndCat(){
    let word = /ca[rt]/
    let match1 = word.test("car")
    return match1
    console.log(match1)
   }
    // 2. pop and prop:
    function popAndProp(){
        let popping = /pr?op/
        match2 = popping.test("pop")
        return match2 
        console.log(match2)
    }


    // 3. ferret, ferry, and ferrari:
    function ferret(){
        let farry = /ferr(et|y|ari)/
        match3 = farry.test("ferrari")
        return match3
        console.log(match3)

    }

    // 4. Any word ending in ious:

    function edible(){     
        let food = /\w+ious\b/
        match4 = food.test("delicious");
        return match4
        console.log(match4)

    }


    // 5. A whitespace character followed by a period, comma, colon, or semicolon:
    function whitespace(){
        let space = /\s[.,:;]/
        match5 = space.test(" .")
        return match5
        console.log(match5)
    }


    // 6. A word longer than six letters:
    function test(){      
        let longText = /\w{7,}/
        match6 = longText.test("eatingFood")
        return match6
        console.log(match6)
    }

    // 7. A word without the letter e (or E):

    function exception(){   
        let noE = /\b[^\We]+\b/
        match7 = noE.test("paul")
        return match7 
        console.log(match7)
  
    }

    carAndCat()
    popAndProp()
    ferret()
    edible()
    whitespace()
    test()
    exception()
}
regExp()
*/





// Quoting style
/*
/ To replace single quotation marks used for dialogue with double quotes while keeping single quotes used in contractions like "aren't," you can use the following regular expression:
function quotingStyles(){
    let word = /(?<!\w)'(.*?)'(?!\w)/g;
    const text = "She said, 'I don't know' and he replied, 'I can't believe it!'";
    const replacedText = text.replace(word, '"$1"');
    return replacedText
}
console.log(quotingStyles())
*/







// numbers again
/*
function numberAgain(str){
    const regex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
    return regex.test(str)
}
console.log(numberAgain("-5e-3"))

*/