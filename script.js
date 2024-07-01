window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'blue';
    context.fillRect(50, 50, 100, 100);

    function gameLoop() {
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};
