// https://nicklo0531.github.io/hw6-2025/

var video;

// Page Load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	console.log("autoplay is set to " + video.autoplay);
	video.loop = false;
	console.log("loop is set to " + video.loop);

});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	let video = document.getElementById('player1');
	if (video.paused) {
		// console.log('Video accessed');
		video.play();
	}
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	// console.log("Pause Video");
	let video = document.getElementById('player1');
	if (video.play) {
		// console.log('Video accessed');
		video.pause();
	}
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Pause Video");
	let video = document.getElementById('player1');
	if (video) {
		// console.log('Video accessed');
		video.playbackRate = video.playbackRate * 0.9;
		console.log('Speed: ', video.playbackRate);
	}
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Pause Video");
	let video = document.getElementById('player1');
	if (video) {
		// console.log('Video accessed');
		video.playbackRate = video.playbackRate / 0.9;
		console.log('Speed: ', video.playbackRate);
	}
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	// console.log("Pause Video");
	let video = document.getElementById('player1');
	if (video) {
		// console.log('Video accessed');
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		console.log("Current Time: ", video.currentTime);
	}
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	// console.log("Mute_Unmute");
	let video = document.getElementById('player1');
	let muteButton = document.getElementById('mute');
	if (video) {
		// console.log('Mute button accessed');
		video.muted = !video.muted;
		if (video.muted) {
			muteButton.innerHTML = 'Unmute'
		} else {
			muteButton.innerHTML = 'Mute';
		}
		console.log("Muted ", video.muted);
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function(x) {
	// console.log("Mute_Unmute");
	let video = document.getElementById('player1');
	video.volume = x.currentTarget.value / 100;
	console.log(video.volume);
});
// referenced from https://stackoverflow.com/questions/71577271/how-would-i-make-a-volume-slider-in-html

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	// console.log("Mute_Unmute");
	let video = document.getElementById('player1');
	video.classList.add("oldSchool");
});

// Original
document.querySelector("#orig").addEventListener("click", function() {
	// console.log("Mute_Unmute");
	let video = document.getElementById('player1');
	video.classList.remove("oldSchool");
});