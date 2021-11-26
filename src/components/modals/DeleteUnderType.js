import React, {useContext, useEffect} from 'react';
import {deleteUnderType, fetchUnderTypes} from "../../http/recipeAPI";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const DeleteUnderType = observer(({show, onHide}) => {
    const {recipe} = useContext(Context)

    useEffect(() => {
        fetchUnderTypes().then(data => recipe.setUnderTypes(data))
    }, [])

    const delUnderType = () => {
        deleteUnderType(recipe.selectedUnderType.id).then(data => null)
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
                    Удалить подтип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{recipe.selectedUnderType.name || "Выберите подтип"}</Dropdown.Toggle>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={delUnderType}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteUnderType;