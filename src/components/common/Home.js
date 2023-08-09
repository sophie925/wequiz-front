import styled from "styled-components";
import oc from "open-color";
import { MdPlayCircleOutline, MdNavigateNext } from 'react-icons/md';
import QuizListContainer from "../../containers/quiz/QuizListContainer";
import { Link as LinkR } from "react-router-dom";

const HomePageBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 1rem;
`;

const HomeNameBlock = styled.div`
    display: flex;
    align-items: center;
`;

const HomeRecentQuizBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 2rem;
    border: 2px solid ${oc.indigo[3]};
    background-color: ${oc.indigo[1]};
    cursor: pointer;
`;

const HomeRecentQuiz = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeRecentQuizLabel = styled.span`
    color: ${oc.gray[6]};
    padding-bottom: 7px;
    font-size: 14px;
    font-weight: bold;
`;

const HomeRecentQuizTitle = styled.p`
    margin: 0;
`;

const PlayIcon = styled(MdPlayCircleOutline)`
    font-size: 25px;
    color: ${oc.indigo[8]};
`;

const HomeQuizTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SeeAllLink = styled(LinkR)`
    color: ${oc.indigo[8]};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const Home = ({ form, quizData, onClick }) => {
    const username = localStorage.getItem('username');
    return (
        <HomePageBlock>
            {username ? (
                <>
                    <HomeNameBlock>
                        <h2>{username}님, </h2>&nbsp;<p>안녕하세요</p>
                    </HomeNameBlock>
                    {quizData && quizData.map((quiz, index) => (
                        <HomeRecentQuizBlock key={index} onClick={() => onClick(quiz)}>
                            <HomeRecentQuiz>
                                <HomeRecentQuizLabel>최근 진행중인 퀴즈</HomeRecentQuizLabel>
                                <HomeRecentQuizTitle>
                                    <strong>{quiz.title}</strong> ({quiz.quizCount}문제)
                                </HomeRecentQuizTitle>
                            </HomeRecentQuiz>
                            <PlayIcon />
                        </HomeRecentQuizBlock>
                    ))}
                </>
            ): ''}
            <HomeQuizTitleWrap>
                <h3>실시간 퀴즈</h3>
                <SeeAllLink to="solve">
                    더보기<MdNavigateNext />
                </SeeAllLink>
            </HomeQuizTitleWrap>
            {form && 
                <QuizListContainer
                    type="home"
                    form={form}
                />
            }
        </HomePageBlock>
    );
};

export default Home;