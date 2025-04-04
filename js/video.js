// https://nicklo0531.github.io/hw6-2025/

let video;

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
	let volumeSpan = document.getElementById('volume');
	if (video.paused) {
		// console.log('Video accessed');
		video.play();
	}
	// video.volume = this.value / 100;
	volumeSpan.innerHTML = video.volume *100 + '%';
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
// document.addEventListener('click', function(){
// 	let video = document.getElementById('player1');
// 	let volumeSpan = document.getElementById('volume');
// 	volumeSpan.innerHTML = '100%';
// 	console.log('100% shown');
// 	document.querySelector("#slider").addEventListener("change", function(x) {
// 		video.volume = x.currentTarget.value / 100;
// 		console.log(video.volume);
// 		volumeSpan.innerHTML = video.volume * 100 + '%';
// 	});
// });

document.querySelector("#slider").addEventListener("change", function(x) {
	let video = document.getElementById('player1');
	let volumeSpan = document.getElementById('volume');
	// video.volume = x.currentTarget.value / 100;
	video.volume = x.currentTarget.value / 100;
	console.log(video.volume);
	volumeSpan.innerHTML = video.volume *100 + '%';
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