//helper for making post call
export const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
      const newData = await response.json();
      return newData;
    }
    catch(error) {
        console.log("error", error);
        alert("Unable to look up article at this time");
    }
}

//update index.html
export function updateUI(data){
    document.getElementById('polarity').innerHTML = "Polarity: " + data.polarity;
    document.getElementById('subjectivity').innerHTML = "Subjectivity: " + data.subjectivity;
    document.getElementById('sample-text').innerHTML = "Sample Text: " + data.text;
    document.getElementById('polarity-confidence').innerHTML = "Polarity Confidence: " + data.polarity_confidence;
    document.getElementById('subjectivity-confidence').innerHTML = "Subjectivity Confidence: " + data.subjectivity_confidence;
}

