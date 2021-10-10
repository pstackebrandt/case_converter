/* type: string */
function convert(targetType) {
    let textArea = document.getElementById("text");

    let convertedText = convertText(textArea.value, targetType);
    textArea.value = convertedText;
}

function convertToProperCase() {

}

function convertToSentenceCase() {

}

/**/
function convertText(text, targetType) {
    // console.log(`Text to convert: ${text}`);
    let convertedText;
    const myName = "convertText(): ";

    switch (targetType) {
        case "upper case":
            convertedText = text.toUpperCase()
            console.log(`${myName} process text to ${targetType}.`);
            break;
        case "lower case":
            convertedText = text.toLowerCase()
            console.log(`${myName} process text to ${targetType}.`);
            break;
        case "proper case":

            break;
        case "sequence case":

            break;
        default:
            console.log(`Unknown target type ${targetType}. Can't process conversion.`);
    }

    return convertedText;
}