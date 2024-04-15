import styled from "styled-components";
import oc from "open-color";

export const TagItemBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const TagItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px;
    padding: 5px;
    background-color: ${oc.indigo[8]};
    border-radius: 5px;
`;

export const TagText = styled.span`
    color: white;
    font-size: 13px;
    cursor: default;
`;

export const TagButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin-left: 3px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;