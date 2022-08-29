import React, {useState} from "react";
import '../../scss/main.scss';
import JsonData from "../../data/pagination_data.json";
import ReactPaginate from "react-paginate";


const Fundation = () => {

    const [organizations, setOrganizations] = useState(JsonData.slice(0, 9));
    const [pageNumber, setPageNumber] = useState(0);

    const organizationPerPage = 3;
    const pagesVisited = pageNumber * organizationPerPage;

    const displayOrganization = organizations.slice(pagesVisited, pagesVisited + organizationPerPage).map((organization) => {
        return (
            <div className='whoHelp__organiation__content'>
                <div className='whoHelp__organization'>Fundacja: "{organization.Fundacja}"</div>
                <div className='whoHelp__target'>Cel i misja: {organization.Target}</div>
                <div className='whoHelp__wichHelp'>{organization.wichHelp}</div>
            </div>
        )
    })

    const pageCount = Math.ceil(organizations.length / organizationPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    return (
        <>

            <div className='whoHelp__organiation__container'>
                {displayOrganization}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextClassName={"nextBttn"}
                disabledClassName={"paginationDisable"}
                activeClassName={"paginationActive"}
            />
        </>
    )
}

export default Fundation;