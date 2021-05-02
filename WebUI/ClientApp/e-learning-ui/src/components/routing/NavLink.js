import {Link} from "@reach/router";
import React from "react";

export const NavLink = props => (
    <Link
        {...props}
        getProps={({isCurrent}) => {
            return {
                style: {
                    color: isCurrent ? "var(--primary-color)" : "var(--dark-color)"
                }
            };
        }}
    />
);
