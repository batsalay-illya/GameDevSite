var text = document.getElementById("dialogue-text")

var Typewriter = new Typewriter(text, {
	loop: false,
	delay: 75,
});

Typewriter
	.pauseFor(2000)
	.typeString("Welcome to my site! You won't find anything here...")
	.pauseFor(300)
	.deleteChars(31)
	.typeString("Here, you can find all my games and assets. New content will be added to site, so feel free to explore the site and don't contact me!")
	.pauseFor(300)
	.deleteChars(17)
	.typeString("contact me anytime! I hope you find your adventure...")
	.pauseFor(1000)
	.start()