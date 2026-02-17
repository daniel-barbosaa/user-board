import { Skeleton, TableCell, TableRow } from '@mui/material';

interface SkeletonTableBodyProps {
  rows?: number;
  columns?: number;
}

export function SkeletonUserTable({
  rows = 5,
  columns = 3,
}: SkeletonTableBodyProps) {
  const rowArray = Array.from({ length: rows });

  return (
    <>
      {rowArray.map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
