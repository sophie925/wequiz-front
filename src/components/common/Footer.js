import { CopyrightIcon, FooterBlock, FooterCopyWrap, FooterLink, FooterLinkWrap } from "../../styles/common/FooterElements";


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