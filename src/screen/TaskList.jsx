import { useSelector } from "react-redux";

const TaskList = () => {
    const task = useSelector(state => state.task)

    return (
        <>
            <ul>
                {task.items.map(item => {
                    return (
                        <li>{item.creator}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default TaskList;