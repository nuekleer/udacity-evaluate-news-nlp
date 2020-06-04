function handleSubmit(event) {
    event.preventDefault();
    Client.postData("/callNLP", {url: document.getElementById("url").value}).then(function(data){
        Client.updateUI(data);
    });
}

export { handleSubmit }
