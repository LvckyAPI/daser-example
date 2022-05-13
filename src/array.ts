const list: string[] = ["Kante", "ast", "tatze", "zirkel", "esel"];
let searchedWord: string;

function printFirstLetters() {
    list.forEach(element => {
        searchedWord = (searchedWord ? searchedWord : '') + element.slice(0, 1);
    });
    console.log(searchedWord);
}

printFirstLetters();