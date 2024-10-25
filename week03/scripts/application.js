document.addEventListener('DOMContentLoaded', function() {

    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addButton');
    const list = document.querySelector('#li');

    let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    button.addEventListener('click', () => {
        if (input.value !== '') {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        } else {
            alert('Please enter a book and chapter.');
            input.focus();
        }
    });

});

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function displayList(item) {
    const list = document.querySelector('#li');
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}