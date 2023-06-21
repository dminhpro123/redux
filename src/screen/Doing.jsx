import DisplayFormMemo from "./DisplayForm";
import { handleDisplayDoing } from "../tasksSlice";

const Doing = () => {

    return (
        <>
            <DisplayFormMemo
                key={3}
                renderAction={handleDisplayDoing()}
            />
        </>
    );
}

export default Doing;