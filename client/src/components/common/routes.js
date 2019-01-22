function getTransactions() {
    fetch('http://localhost:8000/transactions')
        .then(response => response.json())
        .then(response => {
            console.log(response)
        });
}

function postTransaction(json) {
    fetch('http://localhost:8000/transaction', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: json
    });
}

function deleteTransaction(id) {
    fetch('http://localhost:8000/transaction', {
        method: 'DELETE',
        params: {
            id: id
        }
    });
}

function postBudget(json) {
    fetch('http://localhost:8000/budget', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: json
    });
}

function getBudget() {
    fetch('http://localhost:8000/budget')
        .then(response => response.json());
}

export default getTransactions;
export { postBudget, getBudget, postTransaction, deleteTransaction };