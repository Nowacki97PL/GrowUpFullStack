import React from 'react';
import { useParams } from 'react-router-dom';

function TestScreen() {
    const { orderId } = useParams();

  return (
    <div>
      OrderId: {orderId}
    </div>
  )
}

export default TestScreen
