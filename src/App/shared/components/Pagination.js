import React from 'react';
import styled from 'styled-components';
import { Pagination as SemanticPagination } from 'semantic-ui-react';

const Center = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

function Pagination({ total, offset, onOffsetChange, numPerPage = 10 }) {
  const totalPages = Math.min(
    100,
    Math.floor((total + numPerPage - 1) / numPerPage)
  );

  if (totalPages <= 1) return null;
  return (
    <Center>
      <SemanticPagination
        firstItem={null}
        lastItem={null}
        prevItem={null}
        nextItem={null}
        totalPages={totalPages}
        defaultActivePage={1 + offset / numPerPage}
        onPageChange={(e, { activePage }) =>
          onOffsetChange((activePage - 1) * numPerPage)
        }
      />
    </Center>
  );
}

export default Pagination;
