const [rows] = await db.query(
  'SELECT balance FROM wallets WHERE user_id = ?',
  [userId]
);
