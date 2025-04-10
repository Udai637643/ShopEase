import React, { useState } from 'react';
import useCart from '../utils/useCart';
import axios from 'axios';

function Cart() {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ firstName: '', lastName: '', address: '' });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    axios.post('http://localhost:5000/api/orders', {
      ...form,
      cart,
    })
    .then(res => {
      alert(res.data.message);
      clearCart();
    })
    .catch(err => alert(err.response.data.message));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="space-y-2">
        {cart.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-semibold mt-4">Total: ₹{total}</h3>

      <input
        className="block w-full border p-2 mt-4 mb-2 rounded"
        placeholder="First Name"
        value={form.firstName}
        onChange={e => setForm({ ...form, firstName: e.target.value })}
      />
      <input
        className="block w-full border p-2 mb-2 rounded"
        placeholder="Last Name"
        value={form.lastName}
        onChange={e => setForm({ ...form, lastName: e.target.value })}
      />
      <input
        className="block w-full border p-2 mb-4 rounded"
        placeholder="Address"
        value={form.address}
        onChange={e => setForm({ ...form, address: e.target.value })}
      />
      <button 
  className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 transition"
  onClick={handlePlaceOrder}
>
  Place Order
</button>


    </div>
  );
}

export default Cart;