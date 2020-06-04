function handleSubmit(event) {
    event.preventDefault();
    //make post call - get api data - update UI
    Client.postData("/callNLP", {url: document.getElementById("url").value}).then(function(data){
        Client.updateUI(data);
    });
}

export { handleSubmit }
