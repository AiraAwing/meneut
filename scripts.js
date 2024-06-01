let currentPage = 1;
const totalPages = 6;

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(0deg)';
        currentPage--;
    } else {
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(0deg)';
        currentPage = totalPages;
        for (let i = 1; i < totalPages; i++) {
            document.getElementById(`page${i}`).style.transform = 'rotateY(0deg)';
        }
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(-180deg)';
        currentPage++;
    } else {
        for (let i = 1; i <= totalPages; i++) {
            document.getElementById(`page${i}`).style.transform = 'rotateY(0deg)';
        }
        currentPage = 1;
    }
});
