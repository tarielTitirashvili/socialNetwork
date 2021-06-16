import React, { useState } from "react"

const Paginator = ({portionSize = 10, ...props}) => {
  let numPages = Math.ceil(props.totalCount / props.pagesize)
  let pages = []
  for (let i = 1; i <= numPages; i++) {
    pages.push(i)
  }
  let portionCount = Math.ceil(numPages / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPage = (portionNumber - 1) * portionSize + 1
  let rightPortionPage = portionNumber * portionSize
  
  return (
    <div>
     <ul className="pagination">
      <li className="page-item">
          {portionNumber > 1 &&
          <div className="page-link" onClick ={()=> setPortionNumber(portionNumber-1)} >
          <span aria-hidden="true" >&laquo;</span>
        </div>}
      </li>
      {pages.filter(p=> p >=leftPortionPage && p <= rightPortionPage ).map ((p, index) =>
      <li className="page-item" key = {index}>
        <span className="page-link"
          onClick={(e) => props.onPageChanged(p)}>
           {p}
        </span>
        </li>
      )}
        <li className="page-item">
            {portionCount > portionNumber &&
            <div className="page-link"  onClick ={()=> setPortionNumber(portionNumber+1)}>
            <span aria-hidden="true" >&raquo;</span>
          </div>}
        </li>
      </ul>
    </div>
  )
}

export default Paginator