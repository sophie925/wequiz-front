import { MdClose } from 'react-icons/md'
import { CloseBtn, PolicyPageBlock, PolicyWrap, TopBlock } from "../../styles/policy/PolicyElements";
import { CommonTopEndBlock, CommonTopFrontBlock, CommonTopTitle } from '../../styles/common/CommonElements';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const titleMap = {
    terms: '이용약관',
    privacy: '개인정보처리방침'
}

const PolicyTemplate = ({ type, children }) => {
    const navigate = useNavigate();
    const title = titleMap[type];
    return (
        <PolicyPageBlock>
            <PolicyWrap>
                <TopBlock>
                    <CommonTopFrontBlock />
                    <CommonTopTitle>{title}</CommonTopTitle>
                    <CommonTopEndBlock>
                        <CloseBtn onClick={() => navigate("/")}>
                            <MdClose />
                        </CloseBtn>
                    </CommonTopEndBlock>
                </TopBlock>
                {children}
            </PolicyWrap>
        </PolicyPageBlock>
    );
};

export default PolicyTemplate;