// Načtení dat z profile.json a zobrazení na stránce
fetch('profile.json')
  .then(response => response.json())
  .then(data => {
    // Vložení jména do h1 elementu
    const nameElement = document.getElementById('name');
    if (nameElement) {
      nameElement.textContent = data.name;
    }

    // Vložení tagline textu
    const taglineElement = document.getElementById('tagline');
    if (taglineElement && data.tagline) {
      taglineElement.textContent = data.tagline;
    }

    // Vygenerování seznamu dovedností
    const skillsList = document.getElementById('skills');
    if (skillsList && data.skills) {
      data.skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
      });
    }

    // Vygenerování seznamu zájmů
    const interestsList = document.getElementById('interests');
    if (interestsList && data.interests) {
      data.interests.forEach(interest => {
        const listItem = document.createElement('li');
        listItem.textContent = interest;
        interestsList.appendChild(listItem);
      });
    }

    // Vygenerování sekce projektů
    const projectsSection = document.getElementById('projects');
    if (projectsSection && data.projects) {
      data.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;
        
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.className = 'project-link';
        projectLink.textContent = 'Zobrazit projekt →';
        
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDesc);
        projectCard.appendChild(projectLink);
        projectsSection.appendChild(projectCard);
      });
    }
  })
  .catch(error => {
    console.error('Chyba při načítání profilu:', error);
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.textContent = '❌ Chyba: Nepodařilo se načíst data profilu. Zkuste obnovit stránku.';
    document.body.insertBefore(errorMsg, document.body.firstChild);
  });
