import styled from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  list-style: square;
  /* display: flex;
  flex-direction: column;
  gap: 4px; */
  /* justify-items: space-between; */
`;

// export const Li = styled.li`
//   /* display: flex; */
//   flex-direction: row;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

export const Li = styled.li`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 10px; */
  padding: 4px;

  &:before {
    position: absolute;
    content: '';
    background: black;
    width: 7px;
    height: 7px;
    border-radius: 10%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: -30px;
  }
`;

export const Button = styled.button`
  height: 25px;
`;