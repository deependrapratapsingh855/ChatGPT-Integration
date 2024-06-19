const apiKey = '';            // Here you need to add your api key

async function runPrompt() {
    try {
        const prompt = 'Hello chatgpt tell me a joke ?';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-instruct',
                prompt: prompt,
                max_tokens: 2048,
                temperature: 1
            })
        };

        const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
        const responseData = await response.json();

        if (response.ok) {
            for (let i = 0; i < responseData.choices.length; i++) {
                console.log(responseData.choices[i].text);
            }
        } else {
            console.error('Error:', responseData.error.message);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

runPrompt();
