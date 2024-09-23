/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from "./Item.js";

class Inventory extends Item {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    const findItemById = this.items.findIndex((item) => item.id === id);
    if (findItemById !== -1) {
      this.items.splice(findItemById, 1);
    }
  }

  listItems() {
    this.displayDetails(this.items);
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
