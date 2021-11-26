import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {recipe} = useContext(Context)
    return (
        <div className="typeBar">
            <div >
                <h3 className="Types">Типы:</h3>
                <div className="good">
                    {recipe.types.map(type =>
                        <a className="typeButton" active={type.id === recipe.selectedType.id}
                           onClick={() => recipe.setSelectedType(type)}
                           key={type.id}>{type.name}</a>
                    )}
                </div>

                <h3 className="Types">Подтипы:</h3>
                <div className="good">
                    {recipe.underTypes.map(underType =>
                        <a className="typeButton"
                           key={underType.id}>{underType.name}</a>
                    )}
                </div>

            </div>
        </div>

    );
});

export default TypeBar;