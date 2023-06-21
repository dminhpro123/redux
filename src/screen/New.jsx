import DisplayFormMemo from "./DisplayForm";
import { handleDisplayNew } from "../tasksSlice";
import { useDispatch } from "react-redux";

const New = () => {
    const dispatch = useDispatch();
    return (
        <>
            <DisplayFormMemo
                key={2}
                renderAction={dispatch(handleDisplayNew())}
            />
        </>
    );
}

export default New;