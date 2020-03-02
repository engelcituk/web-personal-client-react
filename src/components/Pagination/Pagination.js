import React from 'react';
import { Link } from  'react-router-dom';
import './Pagination.scss';
import { Pagination as PaginationAntd } from 'antd';


export default function Pagination(props) {
    const {posts, location, history} = props;
    const currentPage = parseInt(posts.page);

    const cambiarPagina = newPage => {
        history.push(`${location.pathname}?page=${newPage}`)
    }
    return (
        <PaginationAntd
            className="pagination"
            defaultCurrent= {currentPage}
            total={posts.total}
            pageSize={posts.limit   }
            onChange={ newPage => cambiarPagina(newPage) }
        />
    )
}

