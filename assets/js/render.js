import collaborators from './collaborators.js'
import users from './users.js'

const usersContainer = document.querySelector('.users-container')
  users.forEach(users => {
    usersContainer.innerHTML += `
      <a href="${users.link}" class="person" target="_blank">
        <div class="person-image">
          <img src="${users.image}" alt="Usuário imagem">
        </div>
        <div class="person-info">
          <span class="person-name">${users.name}</span>
        </div>
      </a>
    `
  })
const container = document.querySelector(".section-contributors .users-container")

collaborators.forEach(collaborators => {
  container.innerHTML += `
    <div class="person">
      <div class="person-image">
        <img src="${collaborators.image}" alt="${collaborators.name}"/>
      </div>
      <div class="person-info">
        <a class ="person-name" href="${collaborators.link}" target="_BLANK" rel="noopener noreferrer">
          ${collaborators.name}
        </a>
        <div class="person-activity">
          <span id="owner">${collaborators.activity.owner}</span>
          <span id="code">${collaborators.activity.code}</span>
          <span id="maintenance">${collaborators.activity.maintenance}</span>
          <span id="bugs">${collaborators.activity.bugs_reports}</span>
          <span id="design">${collaborators.activity.design}</span>
          <span id="documentation">${collaborators.activity.documentation}</span>
          <span id="translation">${collaborators.activity.translation}</span>
          <span id="mentoring">${collaborators.activity.mentoring}</span>
        </div>
      </div>
      </div>
    `
})

function hideEmptySpan() {
  const spanActivity = document.querySelectorAll(".person-activity span");

  spanActivity.forEach((span) => {
    if (span.textContent === "undefined") {
      span.parentNode.removeChild(span)
    }
  });
}
hideEmptySpan();

