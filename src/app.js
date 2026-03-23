const sidebar = document.querySelector("#chat_history")
const btn = document.querySelector("#history_btn")
const input = document.querySelector("#input")
const send = document.querySelector("#send")
const letter = document.querySelector("#question")
const answer = document.querySelector("#answer")

send.addEventListener('click', () => {
    letter.classList.toggle("hidden")
    let val = input.value.trim(); 
    if (val === "") return;
    let ms = document.createElement("h2")
    letter.appendChild(ms)
    ms.textContent = val
    input.value = "";
    setTimeout(() => {
        answer.classList.toggle("hidden")   
    }, 1000);
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') send.click();
});

btn.addEventListener('click', () => {
    if (!btn || !sidebar) return;
    sidebar.classList.toggle("hidden")
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("backdrop-blur")
    } else {
        sidebar.classList.add("backdrop-blur");
    }
})


