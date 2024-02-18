import React, { useState } from 'react';
import axios from 'axios';

const OrderingPage = () => {
  const [selectedGiftCard, setSelectedGiftCard] = useState(null);
  const [claimUrl, setClaimUrl] = useState('');

  const handleOrder = async () => {
    try {
      const response = await axios.post('/api/orders', { giftCardId: selectedGiftCard.id });
      setClaimUrl(response.data.claimUrl);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
      <h2>Ordering Page</h2>
      <select value={selectedGiftCard} onChange={(e) => setSelectedGiftCard(e.target.value)}>
        <option value={null}>Select Gift Card</option>
        {/* Populate options with catalogue data */}
      </select>
      <button onClick={handleOrder}>Place Order</button>
      {claimUrl && (
        <div>
          <p>Claim URL:</p>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${claimUrl}&size=200x200`} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default OrderingPage;
