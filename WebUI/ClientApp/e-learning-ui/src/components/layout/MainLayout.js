import React from "react";

export default function MainLayout(props) {
    return (
        <div>
            <h1>main layout!</h1>
            {props.children}
        </div>
    )
}
