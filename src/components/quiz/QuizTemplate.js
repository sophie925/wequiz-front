import { MdKeyboardBackspace } from 'react-icons/md';
import { QuizBackLink, QuizContentBlock, QuizTemplateBlock, QuizTitle, QuizTopBlock, QuizTopEndBlock, QuizTopFrontBlock } from './QuizElements';

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
        step3: '/solveStep2'
    },
    mine: {
        step1: '/',
        step2: '/mine',
    },
    bookmark: {
        step1: '/mypage',
        step2: '/bookmark',
    }
};

const QuizTemplate = ({ type, step, children }) => {
    const title = titleMap[type];
    return (
        <QuizTemplateBlock>
            <QuizContentBlock>
                <QuizTopBlock>
                    <QuizTopFrontBlock>
                        {type !== "result" && (
                            <QuizBackLink to={linkMap[type][step]}>
                                <MdKeyboardBackspace />
                            </QuizBackLink>
                        )}
                    </QuizTopFrontBlock>
                    <QuizTitle>{title}</QuizTitle>
                    <QuizTopEndBlock />
                </QuizTopBlock>
                {children}
            </QuizContentBlock>
        </QuizTemplateBlock>
    );
};

export default QuizTemplate;