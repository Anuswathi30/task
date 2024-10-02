
function scrollDown() {
    const productsSection = document.querySelector('.products-section');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}


function viewAllProducts() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
