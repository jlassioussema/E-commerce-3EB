import React, { useRef, useEffect } from "react";

export default function Paypal({ amount }) {
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "",
                            amount: {
                                currency_code: "USD",
                                value: amount, // Utilisez la valeur de la prop 'amount' ici
                            },
                        },
                    ],
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {

                    alert('Thanks for paying ' + details.payer.name.given_name);
                });
            }
        }).render(paypal.current);
    }, [amount]);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}
