import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
    type: 'text',
    placeholder: 'Some text...',
    size: props.size || '1em',
  }))`
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 2px inset rgba(0, 0, 0, 0.5);
    font-family: Audiowide;
    font-size: ${(props) => props.size};
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    margin: 0.5rem;
    padding: 0.5rem 0;
  `;