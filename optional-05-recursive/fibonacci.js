function fibonacci(n, result = [0, 1]) {
  if (n <= 1) {
    return result.slice(0, n + 1);
  }
  if (result.length - 1 < n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibonacci(n, result);
  }
  return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
