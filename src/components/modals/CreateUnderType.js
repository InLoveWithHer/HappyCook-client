import React, {useContext, useEffect, useState} from 'react';
import {createUnderType, fetchTypes} from "../../http/recipeAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateUnderType = ({show, onHide}) => {
    const {recipe} = useContext(Context)
    const [name, setName] = useState('')

    useEffect(() => {
        fetchTypes().then(data => recipe.setTypes(data))
    }, [])

    const addUnderType = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('typeId', recipe.selectedType.id)
        createUnderType(formData).then(data => onHide())
        window.location.reload()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить подтип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{recipe.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
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
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название подтипа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addUnderType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateUnderType;