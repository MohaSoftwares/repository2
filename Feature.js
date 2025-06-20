function letterFinder (word,match){
    for(let i = 0; i<word.length ; i++){
        if (match == word[i]){
            console.log("Found the ",word[i]," at ",i);
        } else {
            console.log("---no match found !")
        };
    };
};

letterFinder("mohamed","d");

