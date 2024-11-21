// Fungsi untuk menambahkan proyek baru
function addProject(title, description) {
    const projectList = document.getElementById('projectList');

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;
    
    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDescription);
    
    // Menambahkan animasi saat proyek baru ditambahkan
    projectDiv.style.opacity = '0'; // Set opacity awal
    projectDiv.style.transform = 'translateY(20px)'; // Set transform awal

    projectList.appendChild(projectDiv);

    // Memicu reflow agar animasi dapat terjadi
    requestAnimationFrame(() => {
        projectDiv.style.transition = 'opacity 0.5s, transform 0.5s'; // Set transisi
        projectDiv.style.opacity = '1'; // Set opacity akhir
        projectDiv.style.transform = 'translateY(0)'; // Set transform akhir
    });
}

// Contoh penggunaan: Menambahkan proyek baru
addProject('Proyek 4', 'Deskripsi singkat tentang proyek 4.');
addProject('Proyek 5', 'Deskripsi singkat tentang proyek 5.');