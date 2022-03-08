let block_size = window.innerWidth / 20;
for (i = 0; i < 20; i++) {
    let block = $('<div class="block"></div>');
    block.css({width: block_size, height: block_size});
    $('.container').append(block);
}
anime({
    targets: '.block',
    height: '100%', //  высота растет до значения '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false,
    delay: anime.stagger(50) // задержка каждого элемента, чтобы прямоугольники “росли” по очереди
});
anime({
    targets: '.container',
    backgroundColor: '#FFF',
    duration: 1,
    delay: 2000 // задержка начала анимации
});
anime({
    targets: '.block',
    opacity: [1, 0], // меняем прозрачность
    duration: 10000,
    delay: 3000,
    loop: false
});
setTimeout( 'location="shop.html";', 8000 );
