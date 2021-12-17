const cart =()=>{
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartModalCloseBtn = cartModal.querySelector('.cart-close');

  const openModal = ()=>{
    cartModal.style.display = 'flex';
  };
  const closeModal=()=>{
    cartModal.style.display = '';
  };
  cartBtn.addEventListener('click', openModal);
  cartModalCloseBtn.addEventListener('click',closeModal);
}
export default cart;