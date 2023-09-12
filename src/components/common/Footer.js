import { CopyrightIcon, FooterBlock, FooterCopyWrap, FooterLink, FooterLinkWrap } from "../../styles/common/FooterElements";


const Footer = ({ onClick }) => {
    return (
        <FooterBlock>
            <FooterLinkWrap>
                <FooterLink onClick={() => onClick("/terms")}>이용약관</FooterLink>
                <FooterLink onClick={() => onClick("/privacy")}>
                    <strong> 개인정보처리방침</strong>
                </FooterLink> 
                <FooterLink onClick={() => onClick()}> 서비스소개</FooterLink>
            </FooterLinkWrap>
            <FooterCopyWrap>
                Copyright <CopyrightIcon /> WEQUIZ. All Rights Reserved.
            </FooterCopyWrap>
        </FooterBlock>
    );
};

export default Footer;