import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const UnderTypeBar = observer(() => {
    const {recipe} = useContext(Context)
    return (
        <Row className="d-flex">
            {recipe.underTypes.map(underType =>
                <Card
                    key={underType.id}
                    className="p-3"
                >
                    {underType.name}
                </Card>
            )}
        </Row>
    );
});

export default UnderTypeBar;