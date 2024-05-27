import React, { useEffect, useState } from "react";

const Digit = (props) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds+1);
        }, props.seconds);
        // clearing interval
        return () => clearInterval(timer);
    });

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-bg-dark py-5">
            <div className="container-fluid">
                <div className="card bg-secondary" style={{ width: "5rem" }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{seconds % 10}</h5>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Digit;