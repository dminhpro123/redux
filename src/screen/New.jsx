import DisplayFormMemo from "./DisplayForm";
import { handleDisplayNew } from "../tasksSlice";

const New = () => {
    return (
        <>
            <DisplayFormMemo
                key={2}
                renderAction={handleDisplayNew()}
            />
        </>
    );
}

export default New;