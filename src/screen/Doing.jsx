import DisplayFormMemo from "./DisplayForm";
import { handleDisplayDoing } from "../tasksSlice";
import { useDispatch } from "react-redux";

const Doing = () => {
    const dispatch = useDispatch();

    return (
        <>
            <DisplayFormMemo
                key={3}
                renderAction={dispatch(handleDisplayDoing())}
            />
        </>
    );
}

export default Doing;