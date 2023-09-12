import styled from "styled-components";
import { MdCopyright } from 'react-icons/md';

export const FooterBlock = styled.div`
    width: 100%;
    padding: 20px 0 40px;
    background: #f2f2f2;
    text-align: center;
`;

export const FooterLinkWrap = styled.div`
    margin-top: 20px;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: #333;
    position: relative;
    font-weight: 400;
    margin: 5px 10px;
    white-space: pre;
    cursor: pointer;
    &:after {
        content: "";
        position: absolute;
        top: 1px;
        right: -11px;
        width: 1px;
        height: 14px;
        background: #aaa;
    }
    &:last-child:after {
        content: none;
    }
`;

export const FooterCopyWrap = styled.div`
    margin-top: 20px;
    font-size: 13px;
    color: #888;
`;

export const CopyrightIcon = styled(MdCopyright)`
    vertical-align: middle;
`;