window.addEventListener('message', (event) => {
    let data = event.data

    switch (data.action) {
        case "updatePlayerId":
            var id = event.data.id
            document.querySelector("#game-id").textContent = id
            break;
        default:
        break;
    }
});

