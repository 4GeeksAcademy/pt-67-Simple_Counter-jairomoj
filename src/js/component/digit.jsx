import React from "react";

const Digit = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-bg-dark py-5">
            <div className="container-fluid">
                <div className="card bg-secondary" style={{ width: "5rem" }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.seconds % 10}</h5>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Digit;