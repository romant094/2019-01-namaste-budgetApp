function GetTransactions() {
    fetch('http://localhost:8000/transactions')
        .then(response => response.json())
        .then(response => {
            return response;
        });
}

export default GetTransactions;