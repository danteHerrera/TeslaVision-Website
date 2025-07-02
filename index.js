const button = document.getElementById('selfDriveButton');
const fillBar = button.querySelector('.fill-bar');
const content1 = document.querySelector('.content-1');
const content2 = document.querySelector('.content-2');
const enjoyText = document.querySelector('.enjoy-text');

let fillTimeout;

button.addEventListener('mousedown', () => {
    fillBar.style.transition = 'width 1.5s ease-in-out';
    fillBar.style.width = '100%';

    fillTimeout = setTimeout(() => {
        // Step 1: Fade out content-1
        content1.style.opacity = '0';

        // Step 2: After fade-out, hide content-1 and show content-2
        setTimeout(() => {
            content1.style.display = 'none';
            content2.style.display = 'flex';

            // Step 3: Allow layout to happen, then fade in content-2
            setTimeout(() => {
                content2.style.opacity = '1';

                // Step 4: Fade in enjoy-text shortly after
                setTimeout(() => {
                    enjoyText.style.opacity = '1';
                }, 1000);
            }, 50); // small delay to ensure browser applies layout
        }, 500); // match fade-out transition
    }, 1500); // after fill animation
});
