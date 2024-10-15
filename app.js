const title = document.getElementById('songTitle');
const artist = document.getElementById('artist');
const addbtn = document.getElementById('addbtn');
const ul = document.getElementById('songList');
const searchBar = document.getElementById('searchInput');

// Add new song functionality
addbtn.addEventListener('click', () => {
    const newTitle = title.value;
    const newArtist = artist.value;

    if (newTitle === '' || newArtist === '') {
        alert('Both title and artist fields are required!');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'py-1');

    const div = document.createElement('div');
    const p = document.createElement('p');
    const small = document.createElement('small');

    p.innerText = newTitle;
    small.innerText = newArtist;

    p.classList.add('song', 'name');
    small.classList.add('song-artist', 'fw-dark');

    div.append(p);
    div.append(small);
    li.append(div);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.innerText = 'Delete';

    deleteBtn.onclick = () => {
        ul.removeChild(li);
    }

    li.append(deleteBtn);
    ul.append(li);

    
    title.value = '';
    artist.value = '';

    searchSongs();
});


searchBar.addEventListener('input', searchSongs);


function searchSongs() {
    const searchText = searchBar.value.toLowerCase();
    const songs = Array.from(ul.getElementsByTagName('li'));

    
    ul.innerHTML = '';

  
    songs.filter(song => {
        const songTitle = song.querySelector('.song').innerText.toLowerCase();
        return songTitle.includes(searchText);
    }).forEach(matchingSong => {
        ul.appendChild(matchingSong);
    });
}

