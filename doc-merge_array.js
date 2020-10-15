document.querySelector("button").addEventListener("click", mergeArray);

function mergeArray() {
    const arr1 = document.querySelector("#arr1").value.trim(" ");
    const arr2 = document.querySelector("#arr2").value.trim(" ");
    let result;
    
    if (arr1 === "") {
        result = arr2.split(" ");
    } else if (arr2 === "") {
        result = arr1.split(" ");
    } else { result = [...arr1.split(" "), ...arr2.split(" ")] };
    
    let uniqueResult = [...new Set(result)].map(item => parseFloat(item))
    
    console.log(uniqueResult);
    
    document.querySelector("#result").innerText = uniqueResult.sort((a, b) => a - b);
};