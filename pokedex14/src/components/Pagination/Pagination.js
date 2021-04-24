import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

  & > button {
    padding: 5px 8px;
  }
`

const Pagination = ({ changePage }) => {
  const pages = [...Array(32).keys()];
  console.log(pages)

  const handleChangePage = (e) => {
    changePage(e.target.innerText);
  }
  return (
    <PaginationContainer>
      {pages.map((page) => {
        return <button onClick={handleChangePage}>{page + 1}</button>
      })}
    </PaginationContainer>
  )
}

export default Pagination