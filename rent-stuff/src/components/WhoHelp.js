import React, {useState} from "react";
import '../scss/main.scss';
import JsonData from '../data/pagination_data.json'
import ReactPaginate from "react-paginate";


const WhoHelp = () => {

    const [organizations, setOrganizations] = useState(JsonData.slice(0, 9));
    const [pageNumber, setPageNumber] = useState(0);

    const organizationPerPage = 3;
    const pagesVisited = pageNumber * organizationPerPage;

    const displayOrganization = organizations.slice(pagesVisited,pagesVisited + organizationPerPage).map((organization) =>{
        return (
            <div className={organization}>
                <div className='whoHelp__organization'>{organization.Organization}</div>
                <div className='whoHelp__target'>{organization.Target}</div>
                <div>{organization.wichHelp}</div>
            </div>
        )
    })

    const pageCount = Math.ceil(organizations.length / organizationPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return(
        <section className='whoHelp' id='whoHelp'>
            <div className='wrapper'>

                {displayOrganization}
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
            </div>

        </section>
    )
}

export default WhoHelp;