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
    if(data.error !="there was a problem"){
        document.getElementById('polarity').innerHTML = "<span>Polarity</span>: " + data.polarity;
        document.getElementById('subjectivity').innerHTML = "<span>Subjectivity</span>: " + data.subjectivity;
        document.getElementById('sample-text').innerHTML = "<span>Sample Text</span>: " + data.text;
        document.getElementById('polarity-confidence').innerHTML = "<span>Polarity Confidence</span>: " + data.polarity_confidence;
        document.getElementById('subjectivity-confidence').innerHTML = "<span>Subjectivity Confidence</span>: " + data.subjectivity_confidence;
    }
    else{
        alert('Unable to check page at this time');
    }
}

export function sum(a, b) {
    return a + b;
  }

