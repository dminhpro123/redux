import DisplayFormMemo from "./DisplayForm";
import { handleDisplayDone } from "../tasksSlice";

const Done = () => {

    return (
        <>
            <DisplayFormMemo
                key={4}
                renderAction={handleDisplayDone()}
            />
        </>
    );
}

export default Done;