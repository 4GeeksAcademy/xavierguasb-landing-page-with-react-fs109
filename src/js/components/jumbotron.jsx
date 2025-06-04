import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-secondary-subtle mx-5">
            <div className="container-fluid pb-5 ps-5 text-start">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, soluta placeat veniam adipisci doloribus dolore omnis. Possimus impedit consequatur quod enim id eos ratione ea.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;