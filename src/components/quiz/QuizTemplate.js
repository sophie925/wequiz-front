import { MdKeyboardBackspace } from 'react-icons/md';
import Dialog from '../common/Dialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonBlock, CommonTopBackLink, CommonTopBlock, CommonTopEndBlock, CommonTopFrontBlock, CommonTopTitle, CommonWrapper } from '../../styles/common/CommonElements';

/**
 * 퀴즈 만들기/풀기 등 페이지의 레이아웃을 담당하는 컴포넌트
 */

const titleMap = {
    make: '퀴즈 만들기',
    solve: '퀴즈 풀기',
    mine: '내 퀴즈 목록',
    bookmark: '내 찜 목록',
    result: '퀴즈 결과'
};

const linkMap = {
    make: {
        step1: '/',
        step2: '/make',
        step3: '/makeStep2'
    },
    solve: {
        step1: '/',
        step2: '/solve',
    },
    mine: {
        step1: '/mypage',
        step2: '/mine',
    },
    bookmark: {
        step1: '/mypage',
        step2: '/bookmark',
    }
};

const QuizTemplate = ({ type, step, children }) => {
    const navigate = useNavigate();
    const title = titleMap[type];

    // 퀴즈 풀기/만들기 화면 나가기 전 안내용 팝업
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDialogOpen = () => setIsDialogOpen(true);
    const handleDialogClose = () => setIsDialogOpen(false);

    const dialogTitleText = `퀴즈 ${type === "make" ? "작성을" : "풀기를"} 그만하시겠습니까?`;

    // 뒤로가기 클릭 시
    const onClickBack = (link) => {
        if ((link === '/' && type === 'make') || link === '/solve') {
            handleDialogOpen();
        } else {
            navigate(link);
        }
    };
    return (
        <CommonBlock>
            <CommonWrapper>
                <CommonTopBlock>
                    <CommonTopFrontBlock>
                    {type !== "result" && (
                        <CommonTopBackLink onClick={() => onClickBack(linkMap[type][step])}>
                            <MdKeyboardBackspace />
                        </CommonTopBackLink>
                    )}
                    </CommonTopFrontBlock>
                    <CommonTopTitle>{title}</CommonTopTitle>
                    <CommonTopEndBlock />
                </CommonTopBlock>
                {children}
            </CommonWrapper>
            {isDialogOpen &&
                <Dialog isOpen={isDialogOpen} onClose={handleDialogClose}
                    title={dialogTitleText}
                    before={{ onClick: handleDialogClose }}
                    after={{ onClick: () => navigate('/') }}
                >
                    '확인'을 선택하시면 홈 화면으로 이동합니다.
                </Dialog>
            }
        </CommonBlock>
    );
};

export default QuizTemplate;