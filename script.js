document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get('id');

    if (animeId) {
        // Placeholder data - in a real application, this data would be fetched from a server
        const animeData = {
            1: { title: 'Naruto', description: 'A young ninja strives to become the strongest ninja and leader of his village.' },
            2: { title: 'Attack on Titan', description: 'Humanity fights against giant humanoid creatures known as Titans.' },
            3: { title: 'One Piece', description: 'A group of pirates searches for the ultimate treasure known as One Piece.' }
        };

        const animeDetails = animeData[animeId];
        if (animeDetails) {
            document.getElementById('animeTitle').textContent = animeDetails.title;
            document.getElementById('animeDescription').textContent = animeDetails.description;
        }
    }
});
