/**/
function convertToUpperCase() {
    let textArea = document.getElementById("text");

    let convertedText = convertText(textArea.value);
    textArea.value = convertedText;
}

function convertToLowerCase() {

}

function convertToProperCase() {

}

function convertToSentenceCase() {

}

/**/
function convertText(text, method) {
    console.log(`Text to convert: ${text}`);
    let convertedText = text + " converted";
    return convertedText;
}