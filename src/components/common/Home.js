import { MdNavigateNext } from 'react-icons/md';
import { HomeNameBlock, HomePageBlock, HomeQuizTitleWrap, HomeRecentQuiz, HomeRecentQuizBlock, HomeRecentQuizLabel, HomeRecentQuizTitle, PlayIcon, SeeAllLink } from "../../styles/common/HomeElements";
import QuizListContainer from "../../containers/quiz/QuizListContainer";

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