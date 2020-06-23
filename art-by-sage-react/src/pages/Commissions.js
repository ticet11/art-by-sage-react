import React from "react";

export default function Commissions() {
    return (
        <div>
            <div className="commission-intro">
                <img
                    src="https://via.placeholder.com/150"
                    alt=""
                    className="portrait"
                />
                <h1>Hello!</h1>
                <h2>Thanks for being here.</h2>
                <p>Ask me about my very cool art commissions.</p>
            </div>
            <div className="prices">
                <div className="commission-type">
                    <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="price-image"
                    />
                    <h2>Head</h2>
                    <p>$0.00 per person</p>
                </div>
                <div className="commission-type">
                    <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="price-image"
                    />
                    <h2>Head</h2>
                    <p>$0.00 per person</p>
                </div>
                <div className="commission-type">
                    <img
                        src="https://via.placeholder.com/150"
                        alt=""
                        className="price-image"
                    />
                    <h2>Head</h2>
                    <p>$0.00 per person</p>
                </div>
            </div>
            <div className="request">
                <h2>Know what you want?</h2>
                <h2>Wanna discuss an idea?</h2>
                <h2>Send me an</h2>
                <button>email</button>
            </div>
        </div>
    );
}
