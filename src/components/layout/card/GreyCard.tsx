import { Fragment } from "react"
import './Card.css';
import React from "react";

const GreyCard: React.FC = (props) => {
    return (
        <Fragment>
            <div className="grey-card grey">{props.children}</div>
        </Fragment>
    )
}

export default GreyCard;