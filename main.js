
// Function to format the date as YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate() + 1).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to format the date as DD-MM-YYYY
function formatDateBackwards(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate() + 1).padStart(2, '0');
    return `${day}-${month}-${year}`;
}

// Function to check if Mercury is retrograde for a given date
function checkMercuryRetrograde(date) {
    const formattedDate = formatDate(date);
    const formattedDateBackwards = formatDateBackwards(date);
    const apiUrl = `https://mercuryretrogradeapi.com?date=${formattedDate}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const isRetrograde = data.is_retrograde;
            const retrogradeStatus = isRetrograde ? 'SI' : 'NO';
            document.getElementById('result').innerHTML = `Mercurio ${retrogradeStatus} va a estar retrogrado el día ${formattedDateBackwards}`;
            // alert(`Mercury is retrograde on ${formattedDate}: ${retrogradeStatus}`);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while checking Mercury retrograde status.');
        });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const inputDate = new Date(document.getElementById('date-input').value);
    if (isNaN(inputDate)) {
        alert('Invalid date. Please enter a valid date.');
        return;
    }
    checkMercuryRetrograde(inputDate);
}