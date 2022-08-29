import React, {useState} from "react";
import '../../scss/main.scss';
import JsonData from "../../data/pag_local_data.json";
import ReactPaginate from "react-paginate";


const Local = () => {

    const [organizations, setOrganizations] = useState(JsonData.slice(0, 3));
    const [pageNumber, setPageNumber] = useState(0);

    const organizationPerPage = 3;
    const pagesVisited = pageNumber * organizationPerPage;

    const displayOrganization = organizations.slice(pagesVisited, pagesVisited + organizationPerPage).map((organization) => {
        return (
            <div className='whoHelp__organiation__content'>
                <div className='whoHelp__organization'>Zbiórka: "{organization.Local}"</div>
                <div className='whoHelp__target'>{organization.Target}</div>
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
            <div className='whoHelp__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
            <div className='whoHelp__organiation__container'>
                {displayOrganization}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns__local"}
                previousLinkClassName={"previousBttn"}
                nextClassName={"nextBttn"}
                disabledClassName={"paginationDisable"}
                activeClassName={"paginationActive"}
            />
        </>
    )
}

export default Local;