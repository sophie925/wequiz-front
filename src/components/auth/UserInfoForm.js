import { MdNavigateNext, MdBookmarkBorder, MdOutlineTextSnippet } from "react-icons/md";
import { LogoutWrap, UserInfoDescription, UserInfoItemBlock, UserInfoPointLabel, UserInfoLi, UserInfoNameLink, UserInfoPointBlock, UserInfoPointText, UserInfoQuickMenuBlock, UserInfoQuickMenuItemLink, UserInfoUl, WithDrawBtn, UserInfoLabel, UserInfoLink, UserInfoQuizState, QuizStatsData, StatsItem, UserInfoContentItemLink } from "../../styles/auth/UserInfoElement";
import { ErrorText } from "../../styles/common/CommonElements";
import Button from "../common/Button";
import ModalForm from "../common/ModalForm";
import Dialog from "../common/Dialog";
import DonutGraph from "../common/DonutGraph";
import InputForm from "../common/input/InputForm";
import InputBox from "../common/input/InputBox";

const UserInfoForm = ({ type, form, userName, errorText, onLogout, onWithDraw, onChange, onSubmit,
    isDialogOpen, onDialogClick, isModalOpen, handleModalClose }) => {
    return (
        <>
            {type === "mypage" && (
                <>
                    <UserInfoDescription>
                        <UserInfoNameLink to="/myInfo">
                            <h2>{userName} 님</h2><MdNavigateNext />
                        </UserInfoNameLink>
                        <UserInfoPointBlock>
                            <UserInfoPointLabel>포인트</UserInfoPointLabel>
                            <UserInfoPointText>100 P</UserInfoPointText>
                        </UserInfoPointBlock>
                    </UserInfoDescription>
                    <UserInfoQuickMenuBlock>
                        <UserInfoQuickMenuItemLink to="/bookmark">
                            <MdBookmarkBorder />
                            <span>찜</span>
                        </UserInfoQuickMenuItemLink>
                        <UserInfoQuickMenuItemLink to="/mine">
                            <MdOutlineTextSnippet/>
                            <span>내퀴즈</span>
                        </UserInfoQuickMenuItemLink>
                    </UserInfoQuickMenuBlock>
                    {form && (
                        <UserInfoItemBlock>
                            <h3>내 퀴즈 상태</h3>
                            <UserInfoQuizState>
                                <DonutGraph
                                    type="mypage"
                                    correctCount={form?.data.data?.quizSolvingStats.completedQuizPaperCount}
                                    totalCount={form?.data.data?.quizSolvingStats.totalQuizPaperCount}
                                    correctRate={form?.data.data?.quizSolvingStats.correctAnswerRate}
                                />
                                <QuizStatsData>
                                    <StatsItem>
                                        <h4>전체 퀴즈 개수</h4>
                                        <span>{form?.data.data?.quizSolvingStats.totalQuizPaperCount}</span>
                                    </StatsItem>
                                    <StatsItem>
                                        <h4>맞춘 퀴즈</h4>
                                        <span>{form?.data.data?.quizSolvingStats.completedQuizPaperCount}</span>
                                    </StatsItem>
                                    <StatsItem>
                                        <h4>내가 만든 퀴즈</h4>
                                        <span>{form?.data.data?.myQuizStats.myQuizPaperCount}</span>
                                    </StatsItem>
                                </QuizStatsData>
                            </UserInfoQuizState>
                        </UserInfoItemBlock>
                    )}
                    <UserInfoItemBlock>
                        <h3>고객센터</h3>
                        <UserInfoContentItemLink to="/notice">
                            공지사항 <MdNavigateNext />
                        </UserInfoContentItemLink>
                    </UserInfoItemBlock>
                </>
            )}
            {type === "myInfo" && (
                <>
                    <UserInfoUl>
                        <UserInfoLi>
                            <UserInfoLabel>이메일</UserInfoLabel>
                            <p>{form?.account}</p>
                        </UserInfoLi>
                        <UserInfoLi>
                            <UserInfoLabel>이름</UserInfoLabel>
                            <UserInfoLink to="/modifyInfo">
                                <p>{form?.name}</p>
                                <MdNavigateNext />
                            </UserInfoLink>
                        </UserInfoLi>
                        <UserInfoLi>
                            <UserInfoLabel>비밀번호 변경</UserInfoLabel>
                            <UserInfoLink to="/changePassword"><MdNavigateNext /></UserInfoLink>
                        </UserInfoLi>
                    </UserInfoUl>
                    <LogoutWrap>
                        <Button fullwidth onClick={onLogout}>로그아웃</Button>
                    </LogoutWrap>
                    <WithDrawBtn onClick={onWithDraw}>회원탈퇴</WithDrawBtn>
                    {isDialogOpen && 
                        <Dialog isOpen={isDialogOpen} onClose={onDialogClick[0]}
                            title="회원을 탈퇴하시겠습니까?"
                            before={{ onClick: onDialogClick[0] }}
                            after={{ onClick: onDialogClick[1] }}
                        >
                            계속 진행하시려면 '확인'을 선택하세요.
                        </Dialog>
                    }
                    {isModalOpen && 
                        <ModalForm isOpen={isModalOpen} title="회원탈퇴 완료">
                            <div style={{ textAlign: 'center' }}>
                                <p>회원탈퇴가 완료되었습니다.</p>
                                <p style={{ marginBottom: '30px' }}>홈 화면으로 이동합니다.</p>
                                <Button medium onClick={handleModalClose}>확인</Button>
                            </div>
                        </ModalForm>
                    }
                </>
            )}
            {type === "modifyInfo" && (
                <form onSubmit={onSubmit} noValidate>
                    <InputForm
                        title="이름"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                    />
                    <ErrorText>{errorText}</ErrorText>
                    <Button fullwidth>확인</Button>
                </form>
            )}
            {type === "changePassword" && (
                <form onSubmit={onSubmit} noValidate>
                    <InputForm
                        title="현재 비밀번호"
                        type="password"
                        name="oldPassword"
                        value={form.oldPassword}
                        placeholder="비밀번호를 입력해주세요."
                        onChange={onChange}
                    />
                    <InputForm
                        title="새 비밀번호"
                        type="password"
                        name="newPassword"
                        value={form.newPassword}
                        placeholder="새 비밀번호를 입력해주세요."
                        onChange={onChange}
                    />
                    <InputBox
                        type="password"
                        name="newPasswordConfirm"
                        value={form.newPasswordConfirm}
                        placeholder="새 비밀번호를 다시 한번 입력해주세요."
                        onChange={onChange}
                    />
                    <ErrorText>{errorText}</ErrorText>
                    <Button fullwidth>저장</Button>
                    {isModalOpen && 
                        <ModalForm isOpen={isModalOpen} title="비밀번호 변경 완료">
                            <div style={{ textAlign: 'center' }}>
                                <p>비밀번호 변경이 완료되었습니다.</p>
                                <Button medium onClick={handleModalClose}>확인</Button>
                            </div>
                        </ModalForm>
                    }
                </form>
            )}
        </>
    );
};

export default UserInfoForm;