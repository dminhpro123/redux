import DisplayFormMemo from "./DisplayForm";
import { handleDisplayAll } from "../tasksSlice";

const Home = () => {

    return (
        <>
            <DisplayFormMemo
                key={1}
                renderAction={handleDisplayAll()}
            />
        </>
    );
}

export default Home;