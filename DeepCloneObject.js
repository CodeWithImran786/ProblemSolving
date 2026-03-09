
// Ek object ka exact copy create karna, including nested objects.
// Agar nested object change hota hai, original object affected nahi hota.

//JSON method
const obj = {
  name: "Imran",
  address: {
    city: "Rawalpindi",
    country: "Pakistan"
  }
};

const clone = JSON.parse(JSON.stringify(obj));

// Modify nested object
clone.address.city = "Islamabad";

console.log(obj.address.city); // Rawalpindi (original not changed)
console.log(clone.address.city); // Islamabad
