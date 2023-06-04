import styled from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  list-style: square;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

// export const Li = styled.li`
//   & {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     margin-top: 10px;
//   }
//   &:before {
//     content: '';
//     background: black;
//     width: 7px;
//     height: 7px;
//     border-radius: 50%;
//   }
// `;

// export const li::before  = styled.li `content: "\200B";`
