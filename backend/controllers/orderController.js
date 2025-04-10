exports.placeOrder = (req, res) => {
    const { firstName, lastName, address, cart } = req.body;
  
    if (!firstName || !lastName || !address || !cart || cart.length === 0) {
      return res.status(400).json({ message: "All fields are required and cart must not be empty." });
    }
  
    console.log("Order placed:", { firstName, lastName, address, cart });
    return res.json({ message: "Order placed successfully!" });
  };