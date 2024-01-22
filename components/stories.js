document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('story_container');
  for (let i = 5; i <= 15; i++) {
    const newButton = document.createElement('button');
    newButton.classList.add('story');
    newButton.innerHTML = `
	<div class="story__avatar">
	  <div class="story__border">
		<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
		  <circle r="31" cy="32" cx="32" />
		</svg>
	  </div>
	  <div class="story__picture">
		<img src="assets/default-user.png" alt="User Picture" />
	  </div>
	</div>
	<span class="story__user">user${i}</span>
  `;
    container.appendChild(newButton);
  }
});
