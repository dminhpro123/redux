import React, { useEffect, useRef, useState } from "react";
import { addNewTask } from "../tasksSlice";
import { useDispatch } from "react-redux";
import { createUniqueId } from "../helper";

const CreateForm = () => {
    const [titleInput, setTitleInput] = useState('');
    const [creatorInput, setCreatorInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const titleInputRef = useRef(null);
    const creatorInputRef = useRef(null);
    const descriptionInputRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        titleInputRef.current.focus();
    }, [])

    let handleChangeTitle = (e) => {
        setTitleInput(e.target.value);
    }
    let handleChangeCreator = (e) => {
        setCreatorInput(e.target.value);
    }
    let handleChangeDescription = (e) => {
        setDescriptionInput(e.target.value);
    }
    let handleOnClickSave = (e) => {
        e.preventDefault();
        if (titleInputRef.current.value === '' || creatorInputRef.current.value === '' || descriptionInputRef.current.value === '') {
            alert('nhập đủ thông tin');
        } else {
            dispatch(
                addNewTask({
                    id: createUniqueId(),
                    title: titleInput,
                    creator: creatorInput,
                    status: 'New',
                    discription: descriptionInput,
                })
            )
                ;
            titleInputRef.current.value = '';
            creatorInputRef.current.value = '';
            descriptionInputRef.current.value = '';
            titleInputRef.current.focus();
        }
    }

    return (
        <>
            <form action="" className="createForm">
                <div>
                    <label>Title:</label>
                    <input type="text" placeholder="Test 1" onChange={(e) => handleChangeTitle(e)} ref={titleInputRef} />
                </div>
                <div>
                    <label>Creator:</label>
                    <input type="text" placeholder="Test Creator" onChange={(e) => handleChangeCreator(e)} ref={creatorInputRef} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" placeholder="Test Description" onChange={(e) => handleChangeDescription(e)} ref={descriptionInputRef} />
                </div>
                <div>
                    <button type="button" onClick={(e) => handleOnClickSave(e)}>Save</button>
                </div>
            </form>
        </>
    );
}

export default CreateForm;