//1.  local storage .. save
const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.className = savedTheme;
    } else {
      document.body.className = 'light'; // default
    }

    // Step 3: Toggle and save theme
    function toggleTheme() {
      if (document.body.className === 'light') {
        document.body.className = 'dark';
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.className = 'light';
        localStorage.setItem('theme', 'light');
      }
    }
  
//2. ES6 Feature
const cartItems = [
  { name: "Shirt", price: 200 },
  { name: "Pant", price: 500 },
  { name: "Shoes", price: 100 },
];

const total = cartItems.reduce((sum, item) => sum + item.price, 0);
console.log(`Total Price: Rs.${total}`);

//4. Fetch API
window.onload = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const { name, email }= users[0];
      console.log(`Name: ${name}, Email: ${email}`);
    })

    .catch((error) => console.error("Error fetching data:", error));
};

