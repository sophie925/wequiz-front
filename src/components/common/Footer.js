import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdCopyright } from 'react-icons/md';

const FooterBlock = styled.div`
    width: 100%;
    padding: 20px 0 40px;
    background: #f2f2f2;
    text-align: center;
`;

const FooterLinkWrap = styled.div`
    margin-top: 20px;
`;

const FooterLink = styled(LinkR)`
    text-decoration: none;
    color: #333;
    position: relative;
    font-weight: 400;
    margin: 5px 10px;
    white-space: pre;
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

const FooterCopyWrap = styled.div`
    margin-top: 20px;
    font-size: 13px;
    color: #888;
`;

const CopyrightIcon = styled(MdCopyright)`
    vertical-align: middle;
`;

const Footer = () => {
    return (
        <FooterBlock>
            <FooterLinkWrap>
                <FooterLink to="/terms">이용약관</FooterLink>
                <FooterLink to="/privacy">
                    <strong> 개인정보처리방침</strong>
                </FooterLink> 
                <FooterLink to="/"> 서비스소개</FooterLink>
            </FooterLinkWrap>
            <FooterCopyWrap>
                Copyright <CopyrightIcon /> WEQUIZ. All Rights Reserved.
            </FooterCopyWrap>
        </FooterBlock>
    );
};

export default Footer;