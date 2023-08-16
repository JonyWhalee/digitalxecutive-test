// test two

const input = document.querySelector("input")
const normalText = document.querySelector("#normal")
const debounceText = document.querySelector("#debounce")

input.addEventListener("input", (e)=>{
    normalRequest(e.target.value)
    debounceRequest(e.target.value)
})

const normalRequest = (value) =>{
    normalText.textContent = value
    console.log("Normal request")
}

let debounceRequest = debounceFunction((value) =>{
    debounceText.textContent = value
    console.log("Debounce request")
}, 500)

function debounceFunction(callback, delay){
    let isWriting

    return(...args) =>{
        clearTimeout(isWriting)
        isWriting = setTimeout(()=>{
            callback(...args)
        }, delay)
    }
}