import React, {useContext, useEffect} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {deleteType, fetchTypes} from "../../http/recipeAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const DeleteType = observer(({show, onHide}) => {
    const {recipe} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => recipe.setTypes(data))
    }, [])

    const delType = () => {
        deleteType(recipe.selectedType.id).then(data => null)
        onHide()
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
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={delType}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteType;