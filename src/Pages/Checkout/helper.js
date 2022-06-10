import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function displayRazorpay(totalPrice) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const result = await axios.post(
    "https://mitra-cart-2.mittalminakshi.repl.co/payment/orders",
    { totalAmount: Number(totalPrice * 100) }
  );

  console.log("order", result.data);

  if (!result) {
    alert("Server error. Are you online?");
    return;
  }

  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID,
    amount: amount.toString(),
    currency: currency,
    name: "Mitra Cart",
    description: "Test Transaction",
    order_id: order_id,
    handler: async function (response) {
      console.log("handler", response);
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await axios.post(
        "https://mitra-cart-2.mittalminakshi.repl.co/payment/success",
        data
      );
      console.log("succ", result.data);

      alert("Payment " + result.data.msg + "ful");
    },
    prefill: {
      name: "Test",
      email: "test@gmail.com",
      contact: "9999999999",
    },
    notes: {
      address: "Mitra Cart Corporate Office",
    },
    theme: {
      color: "#61dafb",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
