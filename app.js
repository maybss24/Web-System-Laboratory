const title = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const addbtn = document.getElementById('addbtn');
const ul = document.getElementById('songList'); 

addbtn.addEventListener('click', () => {
    // Get value from input form
    const newTitle = title.value;
    const newArtist = artist.value;

    // Create elements
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'py-1');

    const div = document.createElement('div');

    const p = document.createElement('p');
    const small = document.createElement('small');

    // Set value to the elements
    p.innerText = newTitle;
    small.innerText = newArtist;

    // Add classes to elements
    p.classList.add('song', 'name');
    small.classList.add('song-artist', 'fw-dark');

    // Append elements
    div.append(p);
    div.append(small);
    li.append(div);

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.innerText = 'Delete';
   
    li.append(deleteBtn);
    ul.append(li); 


    


    title.value = '';
    artist.value = '';
});

