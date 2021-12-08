import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";
import {Context} from "../index";

const Pages = observer(() => {
    const {recipe} = useContext(Context)
    const pageCount = Math.ceil(recipe.totalCount / recipe.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item active={recipe.page === page} key={page}
                                 onClick={() => recipe.setPage(page)}>{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;