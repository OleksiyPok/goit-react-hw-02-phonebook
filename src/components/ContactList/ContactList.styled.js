import styled from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
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
//     content: '\200B';
//   }
// `;

// export const li::before  = styled.li `content: "\200B";`
