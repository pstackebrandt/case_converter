/* type: string */
function convert(targetType) {
    let textArea = document.getElementById("text");

    let convertedText = convertText(textArea.value, targetType);
    textArea.value = convertedText;
}

function addDummyText() {
    let textArea = document.getElementById("text");
    textArea.value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    console.log(addDummyText);
}

function saveText() {
    // get text from area
    let text = document.getElementById("text").value;
    download("text.txt", text);
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
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
            convertedText = text.toLowerCase()
            convertedText = convertedText.replace(/(^\w|\s\w)/g, c => c.toUpperCase());
            // /(^\w{1})|(\s+\w{1})/g // ok, from https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
            // /\b\w/g  wrong, changes also d of abc'd
            // /(\s\w|^\w)/g // works, by Peter
            break;
        case "sentence case":
            convertedText = text.toLowerCase()
            convertedText = convertedText.replace(/(^\w|\.\s\w)/g, c => c.toUpperCase());
            // /(^\w|\.\s\w)/g // works on simple test sentence only!
            break;
        default:
            console.log(`Unknown target type ${targetType}. Can't process conversion.`);
    }

    return convertedText;
}