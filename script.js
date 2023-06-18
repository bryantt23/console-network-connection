const buttons = [...document.querySelectorAll('button')].filter(button => {
  return button.ariaLabel && button.ariaLabel.startsWith('Invite');
});
// Loop through NodeList and call the click() function on each button
for (var i = 0; i <= buttons.length; i++) buttons[i].click();
