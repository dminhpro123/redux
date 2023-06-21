import DisplayFormMemo from "./DisplayForm";
import { handleDisplayAll } from "../tasksSlice";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    return (
        <>
            <DisplayFormMemo
                key={1}
                renderAction={dispatch(handleDisplayAll())}
            />
        </>
    );
}

export default Home;