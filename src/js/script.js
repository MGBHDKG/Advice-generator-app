function generate()
{
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://api.adviceslip.com/advice')

    request.responseType = 'json'

    request.onload = function() 
    {
        const quote = request.response
        var advice = document.getElementById("advice")
        var text = document.getElementById("quote")
        advice.innerHTML = "Advice #" + quote.slip.id
        text.innerHTML = '\"' + quote.slip.advice + '\"'
    }

    // Send request
    request.send()
}
