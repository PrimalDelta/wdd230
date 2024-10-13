document.addEventListener('DOMContentLoaded', function() {

    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addButton');
    const list = document.querySelector('#li');

    button.addEventListener('click', () => {
        if (input.value !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;

            deleteButton.textContent = 'X';

            li.appendChild(deleteButton);

            list.appendChild(li);

            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
                input.focus();
            });

            input.value = '';
            input.focus();
        }

        else {
            alert('Please enter a book and chapter.');
            input.focus();
        }
    });

});