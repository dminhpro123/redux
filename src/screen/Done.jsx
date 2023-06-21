import DisplayFormMemo from "./DisplayForm";
import { handleDisplayDone } from "../tasksSlice";
import { useDispatch } from "react-redux";

const Done = () => {
    const dispatch = useDispatch();

    return (
        <>
            <DisplayFormMemo
                key={4}
                renderAction={dispatch(handleDisplayDone())}
            />
        </>
    );
}

export default Done;