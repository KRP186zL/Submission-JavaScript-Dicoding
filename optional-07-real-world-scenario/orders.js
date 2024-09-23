// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
const orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const order = {
    id,
    customerName,
    items,
    totalPrice: items.reduce((total, harga) => total + harga.price, 0),
    status: "Menunggu",
  };

  orders.push(order);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const findOrderById = orders.findIndex((order) => order.id === orderId);
  if (findOrderById !== -1) {
    orders[findOrderById].status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const findSuccessTransaction = orders.filter(
    (order) => order.status.toLowerCase() === "selesai"
  );
  if (findSuccessTransaction.length > 0) {
    return findSuccessTransaction.reduce(
      (total, harga) => total + harga.totalPrice,
      0
    );
  }
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const findOrderById = orders.findIndex((order) => order.id === id);
  if (findOrderById !== -1) {
    orders.splice(findOrderById, 1);
  }
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
