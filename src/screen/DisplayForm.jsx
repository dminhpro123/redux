import React, { useEffect } from "react";
import CardHome from "./CardHome";
import { useSearchParams } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { handleDisplayAll, handleDisplayNew, handleDisplayDoing, handleDisplayDone } from '../tasksSlice';

const DisplayForm = ({ renderAction }) => {
    let [getSearchParams, setGetSearchParams] = useSearchParams();
    const paramPaginatePage = 'page';
    const PAGE_SIZE_PAGINATION = 8;
    const task = useSelector(state => state.task);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (renderAction) {
            case 'ALL':
                dispatch(handleDisplayAll());
                break;
            case 'NEW':
                dispatch(handleDisplayNew());
                break;
            case 'DOING':
                dispatch(handleDisplayDoing());
                break;
            case 'DONE':
                dispatch(handleDisplayDone());
                break;
        }
        // dispatch(renderAction);
        setGetSearchParams({ page: 1 });
    }, []);

    useEffect(() => {
        if (getSearchParams.size === 0 || parseInt(getSearchParams.get(paramPaginatePage)) > pageNumber()
            || parseInt(getSearchParams.get(paramPaginatePage)) < 1 || isNaN(parseInt(getSearchParams.get(paramPaginatePage))))
            setGetSearchParams({ page: 1 });
        else setGetSearchParams({ page: getSearchParams.get(paramPaginatePage) });
    }, [getSearchParams])

    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const pageNumber = () => {
        return (Number.isInteger(task.fillterTasks.length / PAGE_SIZE_PAGINATION))
            ? (task.fillterTasks.length / PAGE_SIZE_PAGINATION)
            : (Math.floor(task.fillterTasks.length / PAGE_SIZE_PAGINATION) + 1)
    }

    const renderPaginateBarNum = () => {
        let list = [];
        for (let i = 0; i < pageNumber(); i++) {
            list.push(paginateNode(i + 1));
        }
        return list;
    }

    const paginateNode = (id) => {
        let idBar = `barId_${id}`;
        return (id === parseInt(getSearchParams.get(paramPaginatePage)))
            ?
            <Pagination.Item active id={idBar} key={idBar} onClick={(e) => handleOnClickPaginateBar(e)}>{id}</Pagination.Item>
            :
            <Pagination.Item id={idBar} key={idBar} onClick={(e) => handleOnClickPaginateBar(e)}>{id}</Pagination.Item>
    }

    const renderPaginateNodeFirst = () => {
        return (parseInt(getSearchParams.get(paramPaginatePage)) === 1)
            ?
            <Pagination.First key={'paginate.first'} disabled />
            :
            <Pagination.First key={'paginate.first'} onClick={() => handleOnClickFirst()} />
    }

    const renderPaginateNodePrev = () => {
        return (parseInt(getSearchParams.get(paramPaginatePage)) === 1)
            ?
            <Pagination.Prev key={'paginate.prev'} disabled />
            :
            <Pagination.Prev key={'paginate.prev'} onClick={() => handleOnClickPrev()} />
    }

    const renderPaginateNodeNext = () => {
        return (parseInt(getSearchParams.get(paramPaginatePage)) === pageNumber())
            ?
            <Pagination.Next key={'paginate.next'} disabled />
            :
            <Pagination.Next key={'paginate.next'} onClick={() => handleOnClickNext()} />
    }

    const renderPaginateNodeLast = () => {
        return (parseInt(getSearchParams.get(paramPaginatePage)) === pageNumber())
            ?
            <Pagination.Last key={'paginate.last'} disabled />
            :
            <Pagination.Last key={'paginate.last'} onClick={() => handleOnClickLast()} />
    }

    const renderPaginateList = () => {
        let list = [];
        list.push(renderPaginateNodeFirst());
        list.push(renderPaginateNodePrev());
        list.push(renderPaginateBarNum());
        list.push(renderPaginateNodeNext());
        list.push(renderPaginateNodeLast());
        return list;
    }

    const handleOnClickFirst = () => {
        setGetSearchParams({ page: 1 });
    }

    const handleOnClickPrev = () => {
        setGetSearchParams({ page: parseInt(getSearchParams.get(paramPaginatePage)) - 1 });
    }

    const handleOnClickNext = () => {
        setGetSearchParams({ page: parseInt(getSearchParams.get(paramPaginatePage)) + 1 });
    }

    const handleOnClickLast = () => {
        setGetSearchParams({ page: pageNumber() });
    }

    const handleOnClickPaginateBar = (e) => {
        setGetSearchParams({ page: e.target.id.substring(6, e.target.id.length) });
    }

    return (
        <div className="board">
            <div className="items">
                {
                    paginate(task.fillterTasks, PAGE_SIZE_PAGINATION, getSearchParams.get(paramPaginatePage)).map((item) => {
                        return (
                            <div key={item.id}>
                                <CardHome
                                    {...item}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <Pagination>
                {
                    renderPaginateList()
                }
            </Pagination>
        </div>
    );
}

const DisplayFormMemo = React.memo(DisplayForm);
export default DisplayFormMemo;