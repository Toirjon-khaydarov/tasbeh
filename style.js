let count = 0;

const countDisplay = document.getElementById("count");
const messageDisplay = document.getElementById("message");

document.getElementById("plus").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;

    if (count % 33 === 0) {
        messageDisplay.textContent = `Siz ${count} ta zikir aytdiz.`;
        messageDisplay.classList.remove("hidden"); 
    }

    if (count % 33 === 1) {
        messageDisplay.classList.add("hidden");
    }
});

document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    messageDisplay.classList.add("hidden");
});

document.getElementById("showMessage").addEventListener("click", () => {
    messageDisplay.textContent = `Siz ${count} ta zikir aytdiz.`;
    messageDisplay.classList.remove("hidden"); 
});