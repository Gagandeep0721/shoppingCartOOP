import { Shop, User } from "./MyClasses";

const loginForm = document.getElementById('loginForm') as HTMLFormElement;
loginForm.addEventListener('submit', loginUser);

const cartForm = document.getElementById('cartForm') as HTMLFormElement;
cartForm.addEventListener('submit', addToCart);

// Call showItems and updateCart initially
const shop = new Shop();
shop.showItems();
Shop.updateCart();

function addToCart(event: Event): void {
        event.preventDefault();
      
        const itemInput = document.getElementById('item') as HTMLInputElement;
        const quantityInput = document.getElementById('quantity') as HTMLInputElement;
      
        const item = itemInput.value.trim();
        const quantity = parseInt(quantityInput.value.trim(), 10) || 1;
      
        if (item) {          
          const selectedItem = shop.items.find((shopItem) => shopItem.name === item);
      
          if (selectedItem) {
                const existingCartItem = Shop.myUser?.cart.find(
              (cartItem) => cartItem.item.id === selectedItem.id
            );
      
            if (existingCartItem) {              
              existingCartItem.quantity += quantity;
            } else {           
              Shop.myUser?.addToCart(selectedItem);
            }
      
            Shop.updateCart();
          } else {
            console.log('Item not found in the shop.');
          }
        } else {
          console.log('Please enter a valid item name.');
        }
      
      
        itemInput.value = '';
        quantityInput.value = '';
      }

      


function loginUser(this: HTMLFormElement, ev: SubmitEvent) {
        throw new Error("Function not implemented.");
}

