import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Dropdown, Form, Row} from "react-bootstrap";
import {createRecipe, fetchTypes, fetchUnderTypes} from "../http/recipeAPI";
import {Context} from "../index";
import {HOME_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import "../assets/css/CreateRecipe.css";

const CreateRecipe = observer(() => {
    const history = useHistory()
    const {recipe} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cooking_time, setCookingTime] = useState('')
    const [file, setFile] = useState(null)
    const [step, setStep] = useState([])
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        fetchTypes().then(data => recipe.setTypes(data))
        fetchUnderTypes().then(data => recipe.setUnderTypes(data))
    }, [])

    const addStep = () => {
        setStep([...step, {step_number: '', depiction: '', number: Date.now()}])
    }
    const removeStep = (number) => {
        setStep(step.filter(i => i.number !== number))
    }
    const changeStep = (key, value, number) => {
        setStep(step.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addIngredient = () => {
        setIngredient([...ingredient, {name: '', description: '', number: Date.now()}])
    }
    const removeIngredient = (number) => {
        setIngredient(ingredient.filter(i => i.number !== number))
    }
    const changeIngredient = (key, value, number) => {
        setIngredient(ingredient.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addRecipe = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('cooking_time', cooking_time)
        formData.append('img', file)
        formData.append('description', description)
        formData.append('typeId', recipe.selectedType.id)
        formData.append('underTypeId', recipe.selectedUnderType.id)
        formData.append('step', JSON.stringify(step))
        formData.append('ingredient', JSON.stringify(ingredient))
        createRecipe(formData).then(data => alert("??????????!"))
        history.push(HOME_ROUTE)
        window.location.reload()
    }

    return (
        <Container>
            <Form>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{recipe.selectedType.name || "???????????????? ??????"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {recipe.types.map(type =>
                            <Dropdown.Item
                                onClick={() => recipe.setSelectedType(type)}
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{recipe.selectedUnderType.name || "???????????????? ????????????"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {recipe.underTypes.map(under_type =>
                            <Dropdown.Item
                                onClick={() => recipe.setSelectedUnderType(under_type)}
                                key={under_type.id}
                            >
                                {under_type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder="?????????????? ???????????????? ??????????????"
                />
                <Form.Control
                    value={cooking_time}
                    onChange={e => setCookingTime((e.target.value))}
                    className="mt-3"
                    placeholder="?????????????? ???????????????????????? ??????????????????????????"

                />
                <Form.Control
                    value={description}
                    onChange={e => setDescription((e.target.value))}
                    className="mt-3"
                    placeholder="?????????????? ???????????????? ??????????????"
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
                />
                <hr/>
                <Button
                    variant={"outline-dark"}
                    onClick={addStep}
                >
                    ???????????????? ?????????? ??????
                </Button>
                {step.map(i =>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                value={i.step_number}
                                onChange={(e) => changeStep('step_number', e.target.value, i.number)}
                                placeholder="?????????????? ?????????? ????????"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={i.depiction}
                                onChange={(e) => changeStep('depiction', e.target.value, i.number)}
                                placeholder="?????????????? ???????????????? ????????"
                            />
                        </Col>
                        <Col md={4}>
                            <Button
                                onClick={() => removeStep(i.number)}
                                variant={"outline-danger"}
                            >
                                ?????????????? ??????
                            </Button>
                        </Col>
                    </Row>
                )}
                <hr/>
                <Button
                    variant={"outline-dark"}
                    onClick={addIngredient}
                >
                    ???????????????? ?????????? ????????????????????
                </Button>
                {ingredient.map(i =>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                value={i.name}
                                onChange={(e) => changeIngredient('name', e.target.value, i.number)}
                                placeholder="?????????????? ?????? ??????????????????????"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={i.description}
                                onChange={(e) => changeIngredient('description', e.target.value, i.number)}
                                placeholder="?????????????? ???????????????? ??????????????????????"
                            />
                        </Col>
                        <Col md={4}>
                            <Button
                                onClick={() => removeIngredient(i.number)}
                                variant={"outline-danger"}
                            >
                                ?????????????? ????????????????????
                            </Button>
                        </Col>
                    </Row>
                )}
                <hr/>
                <Button className="addRecipeBookButton ms-4" onClick={addRecipe}>????????????????</Button>
            </Form>
        </Container>
        // <div className="createRecipeSd">
        //     <form method="post" id="c-form">
        //         <select className="selectCreate" form="c-form">
        //             <option selected="selected">{recipe.selectedType.name || "???????????????? ??????"}</option>
        //             {recipe.types.map(type =>
        //                 <option onClick={() => recipe.setSelectedType(type)} key={type.id}>{type.name}</option>
        //             )}
        //         </select>
        //         <select className="selectCreate" form="c-form">
        //             <option selected="selected">{recipe.selectedUnderType.name || "???????????????? ????????????"}</option>
        //             {recipe.underTypes.map(under_type =>
        //                 <option onClick={() => recipe.setSelectedUnderType(under_type)}
        //                         key={under_type.id}>{under_type.name}</option>
        //             )}
        //         </select>
        //         <a className="addRecipeBookButton" onClick={addRecipe}>?????????????? ????????????</a>
        //         <div>
        //             <form >
        //                 <input form="c-form" className="minWidth" type="text" placeholder="?????????????? ???????????????? ??????????????" value={name}
        //                        onChange={e => setName(e.target.value)} maxLength="100"/>
        //             </form>
        //             <form>
        //                 <input form="c-form" className="minWidth" type="text" placeholder="?????????????? ?????????? ??????????????????????????"
        //                        value={cooking_time}
        //                        onChange={e => setCookingTime(e.target.value)} maxLength="20"/>
        //             </form>
        //             <form>
        //                 <input form="c-form" className="minWidth" type="text" placeholder="?????????????? ???????????????? ??????????????"
        //                        value={description}
        //                        onChange={e => setDescription(e.target.value)}/>
        //             </form>
        //             <form>
        //                 <input  form="c-form" className="minWidth" type="file" onChange={selectFile}/>
        //             </form>
        //         </div>
        //         <div className="otstup3">
        //             <a className="authButton" onClick={addStep}>???????????????? ?????????? ??????</a>
        //         </div>
        //         {step.map(i =>
        //             <div key={i.number}>
        //                 <form>
        //                     <input form="c-form" value={i.step_number}
        //                            onChange={(e) => changeStep('step_number', e.target.value, i.number)}
        //                            placeholder="?????????????? ?????????? ????????"/>
        //                 </form>
        //                 <form>
        //                     <input form="c-form" value={i.depiction}
        //                            onChange={(e) => changeStep('depiction', e.target.value, i.number)}
        //                            placeholder="?????????????? ???????????????? ????????"/>
        //                 </form>
        //                 <div className="otstup3">
        //                     <a className="authButton" onClick={() => removeStep(i.number)}>?????????????? ??????</a>
        //                 </div>
        //             </div>
        //         )}
        //         <div className="otstup3">
        //             <a className="authButton" onClick={addIngredient}>???????????????? ?????????? ????????????????????</a>
        //         </div>
        //         {ingredient.map(i =>
        //             <div key={i.number}>
        //                 <form>
        //                     <input form="c-form" value={i.name} onChange={(e) => changeIngredient('name', e.target.value, i.number)}
        //                            placeholder="?????????????? ?????? ??????????????????????"/>
        //                 </form>
        //                 <form>
        //                     <input form="c-form" value={i.description}
        //                            onChange={(e) => changeIngredient('description', e.target.value, i.number)}
        //                            placeholder="?????????????? ???????????????????? ????????????????????"/>
        //                 </form>
        //                 <div className="otstup3">
        //                     <a className="authButton" onClick={() => removeIngredient(i.number)}>?????????????? ????????????????????</a>
        //                 </div>
        //             </div>
        //         )}
        //     </form>
        //
        // </div>
    );
});

export default CreateRecipe;