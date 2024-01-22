const suggestionsContainer = document.getElementById('suggestionsContainer');
const suggestedUsers = [
  { username: 'JonDoe', followers: ['elonmask', 'ye', 'chris'] },
  { username: 'janedoe', followers: ['user1', 'user2', 'user3'] },
  { username: 'user18', followers: ['user1', 'user9'] },
  { username: 'user19', followers: ['user1', 'user3'] },
  { username: 'user20', followers: ['user1', 'user6'] },
];
suggestedUsers.forEach((user) => {
  const suggestionElement = document.createElement('div');
  suggestionElement.classList.add('side-menu__suggestion');

  suggestionElement.innerHTML = `
	  <a href="#" class="side-menu__suggestion-avatar">
		<img src="assets/default-user.png" alt="User Picture" />
	  </a>
	  <div class="side-menu__suggestion-info">
		<a href="#">${user.username}</a>
		<span>Followed by ${user.followers.join(', ')} and ${
    user.followers.length
  } others</span>
	  </div>
	  <button class="side-menu__suggestion-button"><t>Follow</t></button>
	`;
  suggestionsContainer.appendChild(suggestionElement);
});

const followButtons = document.getElementsByClassName('side-menu__suggestion-button');

for (let i = 0; i < followButtons.length; i++) {
  followButtons[i].addEventListener('click', function() {
    const suggestionElement = this.closest('.side-menu__suggestion');

    const paragraph = suggestionElement.querySelector('t');

    paragraph.textContent = 'Following';
    paragraph.style.color = 'white';

    this.disabled = true;
  });
}