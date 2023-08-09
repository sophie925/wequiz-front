import { MdClose } from 'react-icons/md'
import { CloseBtn, PolicyPageBlock, PolicyWrap, TitleBlock, TopBlock, TopEndBlock, TopFrontBlock } from "./PolicyElements";

const titleMap = {
    terms: '이용약관',
    privacy: '개인정보처리방침'
}

const PolicyTemplate = ({ type, children }) => {
    const title = titleMap[type];
    const onClick = e => {
        window.location = "/";
    }
    return (
        <PolicyPageBlock>
            <PolicyWrap>
                <TopBlock>
                    <TopFrontBlock />
                    <TitleBlock>{title}</TitleBlock>
                    <TopEndBlock>
                        <CloseBtn onClick={onClick}>
                            <MdClose />
                        </CloseBtn>
                    </TopEndBlock>
                </TopBlock>
                {children}
            </PolicyWrap>
        </PolicyPageBlock>
    );
};

export default PolicyTemplate;