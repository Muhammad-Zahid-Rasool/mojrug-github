import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess }) => {
    return (
        <PayPalScriptProvider options={{ 'client-id': 'AXWxIS3tLtiAYB1TqBRb6HaYbviW6G8hSIHQqP4t5Qmdvt5jUZXhYkWxR4qtkAr2c0DKOGHcObZGjlWN' }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount,
                            },
                        }],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(details => {
                        onSuccess(details);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
