const sidebar = document.querySelector("#chat_history")
const btn = document.querySelector("#history_btn")

btn.addEventListener('click', () => {
    if (!btn || !sidebar) return;
    sidebar.classList.toggle("hidden")
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("backdrop-blur")
    } else {
        sidebar.classList.add("backdrop-blur");
    }
})


