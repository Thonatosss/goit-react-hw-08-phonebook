import styled from "@emotion/styled"
const DeleteButton = styled.button`
 color: white;
  background-color: black;
  padding: 6px 10px;
  border-radius: 10px;
  border-style: none;
  margin-left: 20px;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 12px;
  &:hover {
    background-color: red;

`;
export const ContactsList = styled.ul`


`
export const ContactsListItem = styled.ul`
margin-top: 15px;
`

export {DeleteButton};