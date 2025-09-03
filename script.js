
// New URL points to your proxy server
const apiUrl = 'https://ve.dolarapi.com/v1/dolares/oficial';

// Function to get the exchange rate
async function getExchangeRate() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Could not get the exchange rate.');
        }
        const data = await response.json();
        // Assuming the response from your proxy is similar to the BCV API
        const rate = data.promedio; 
        
        // Update the HTML element with the rate
        document.getElementById('euro-rate').textContent = rate;
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('euro-rate').textContent = 'Error loading';
    }
}

// Function to perform the conversion
function convertCurrency() {
    const amount = document.getElementById('input-amount').value;
    const rate = parseFloat(document.getElementById('euro-rate').textContent);
    
    if (isNaN(amount) || amount === '' || isNaN(rate)) {
        document.getElementById('conversion-result').textContent = 'Please enter a valid amount.';
        return;
    }
    
    const convertedAmount = amount * rate;
    document.getElementById('conversion-result').textContent = `${amount} DOLAR = ${convertedAmount.toFixed(2)} Bs`;
}

// Call the function when the page loads
getExchangeRate();