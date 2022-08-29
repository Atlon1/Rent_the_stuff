import React, {useState} from "react";
import '../scss/main.scss';
import JsonData from '../data/pagination_data.json'
import ReactPaginate from "react-paginate";
import decoration from '../assets/Decoration.svg'


const WhoHelp = () => {

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
        <section className='whoHelp' id='whoHelp'>
            <div className='wrapper'>
                <div className='whoHelp__container'>
                    <h6>Komu Pomagamy?</h6>
                    <img src={decoration} className='whoHelp__decoration'/>
                    <div className='whoHelp__diffrence'>
                        <div>Fundacją</div>
                        <div>Organizacja pozarządowym</div>
                        <div>Lokalnym zbiórką</div>
                    </div>
                    <div className='whoHelp__text'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>
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
                </div>
            </div>

        </section>
    )
}

export default WhoHelp;