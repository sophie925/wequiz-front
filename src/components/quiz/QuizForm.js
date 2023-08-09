import styled from "styled-components";
import StyledButton from "../common/Button";
import oc from 'open-color';
import { Button, ToggleButton, ToggleButtonGroup } from "../../../node_modules/@mui/material/index";
import { MdOutlineCreate } from 'react-icons/md';
import ModalForm from "../common/ModalForm";
import CategoryItem from "./CategoryItem";
import QuizDetailList from "./QuizDetailList";
import Dialog from "../common/Dialog";

/**
 * 퀴즈 만들기 또는 풀기 폼을 보여줌
 */

const QuizFormBlock = styled.div`
    display: flex;
    flex-direction: column;
    * {
        box-sizing: border-box;
    }
    select {
        font-family: "BMHANNA Air";
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin-right: 5px;
        border: 1px solid #dadce0;
        border-radius: 4px;
        box-sizing: border-box;
        color: #424242;
        transition: color .1s, background-color .1s, border-color 1s;
        width: 200px;
    }
    .quiz-move-button-area {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
    .move-button-area {
        display: flex;
        margin-top: 30px;
        Button {
            margin: 0.25rem;
        }
    }
    .label {
        display: flex;
        flex-direction: column;
        label {
            font-weight: bold;
            margin-bottom: 5px;
        }
        input {
            font-family: "BMHANNA Air";
            border: 1px solid #ddd;
            border-radius: 6px;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            padding: 15px 20px;
            font-size: 16px;
            margin-bottom: 12px;
            height: 50px;
            &:focus {
                border: 2px solid ${oc.indigo[8]};
            }
        }
    }
    .both {
        display: flex;
    }
    .both .label {
        flex: 0.5;
        &:last-child {
            margin-left: 10px;
        }
        button {
            width: 50%;
        }
    }
    .label .btn {
        display: flex;
        justify-content: space-between;
        input:focus {
            border: 1px solid #ddd;
        }
        button {
            width: 30%;
            height: 48px;
            margin-left: 5px;
        }
    }
`;

const QuizNumberBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0 40px;
    Button{
        margin: 0 5px;
        padding: 5px;
        min-width: 25px;
        position: none;
        background-color: ${oc.indigo[6]};
    }
`;

const QuizForm = ({ step, form, data, quizCount, selectNumber, cho_hangul, 
        isModalOpen, onMadalClick, onCateClick, onChange, onSelectChange, onClick,
        isOpen, handleClose, onClickQuizNumberButton, onClickNextQuiz,
        isDialogOpen, isDialogClick }) => {
    return (
        <QuizFormBlock>
            {step === "step1" && (
                <div>
                    <div className="label">
                        <label>제목*</label>
                        <input
                            type="text"
                            name="title"
                            onChange={onChange}
                            value={data.title}
                            placeholder="퀴즈제목을 입력하세요."
                            required
                        />
                    </div>
                    <div className="label">
                        <label>설명</label>
                        <input
                            type="text"
                            name="description"
                            onChange={onChange}
                            value={data.description}
                            placeholder="퀴즈설명을 간단히 입력하세요."
                        />
                    </div>
                    <div className="label">
                        <label>카테고리*</label>
                        <div className="btn">
                            <input
                                type="text"
                                name="categoryDispaly"
                                defaultValue={data.categoryDispaly}
                                placeholder="카테고리를 선택하세요."
                                disabled
                            />
                            <input
                                type="text"
                                name="category"
                                defaultValue={data.category}
                                hidden
                            />
                            <StyledButton onClick={onMadalClick[0]}>선 택</StyledButton>
                        </div>
                    </div>
                    {isModalOpen && 
                        <ModalForm isOpen={isModalOpen} title="카테고리 선택" onClose={onMadalClick[1]}>
                            <CategoryItem categories={form && form.data.data}  onClick={onCateClick} />
                        </ModalForm>
                    }
                    <div className="both">
                        <div className="label">
                            <label>개수(1-10개)*</label>
                            <input
                                type="text"
                                name="quizCount"
                                onChange={onChange}
                                placeholder="퀴즈개수를 입력하세요."
                                value={data.quizCount}
                                min="1"
                                max="10"
                            />
                        </div>
                        <div className="label">
                            <label>공개여부*</label>
                            <ToggleButtonGroup
                                name="accessibility"
                                value={data.accessibility}
                                exclusive
                                onChange={e => onSelectChange(e, "accessibility")}
                                aria-label="Platform"
                            >
                                <ToggleButton value="PUBLIC">공개</ToggleButton>
                                <ToggleButton value="PRIVATE">비공개</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </div>
            )}
            {step === "step2" && (
                <div>
                    <QuizNumberBtnWrap>
                        {quizCount.map((isDisabled, index) => (
                            <Button
                                variant="contained"
                                key={index}
                                value={index+1}
                                onClick={() => onClickQuizNumberButton(index)}
                                disabled={isDisabled}
                            >
                                {index+1}
                            </Button>
                        ))}
                    </QuizNumberBtnWrap>
                    <form>
                        <p style={{fontWeight: 'bold', display: 'flex'}}>
                            <MdOutlineCreate />
                            {selectNumber}번 문제
                            </p>
                        <div className="label">
                            <label>퀴즈정답</label>
                            <input
                                type="text"
                                name="answer"
                                value={form.answer}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="label">
                            {Array(3).fill().map((_, index) => (
                                <input
                                    type="text"
                                    name="hints"
                                    key={index}
                                    value={form.hints[index] ?? ''}
                                    placeholder={`${index+1}번째 힌트`}
                                    onChange={e => onChange(e, index)}
                                    required
                                />
                            ))}
                        </div>
                    </form>
                    <StyledButton fullwidth indigo onClick={onClickNextQuiz}>
                        다음문제
                    </StyledButton>
                    {isDialogOpen && 
                        <Dialog isOpen={isDialogOpen} onClose={isDialogClick[0]}
                            title="퀴즈 작성을 완료하시겠습니까?"
                            before={{ onClick: isDialogClick[0] }}
                            after={{ onClick: isDialogClick[1] }}
                        >
                            계속 진행하시려면 '확인'을 선택하세요.
                        </Dialog>
                    }
                </div>
            )}
            {step === "step3" && (
                <>
                    <QuizDetailList type="make" form={form} cho_hangul={cho_hangul} />
                    <StyledButton fullwidth indigo onClick={onClick[1]}>
                        문제완성
                    </StyledButton>
                    {isOpen &&
                        <ModalForm isOpen={isOpen} title="퀴즈 완성">
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '40px' }}>퀴즈를 완성하였습니다!</p>
                                <StyledButton medium indigo onClick={handleClose}>확인</StyledButton>
                            </div>
                        </ModalForm>
                    }
                </>
            )}
            {step === "step1" && (
                <div className="move-button-area">
                    <StyledButton medium white
                        onClick={onClick[0]}
                    >
                        {step === "step1" ? "취 소" : "이 전"}
                    </StyledButton>
                    <StyledButton medium
                        onClick={onClick[1]}
                    >
                        {step === "step3" ? "완 성" : "다 음"}
                    </StyledButton>
                </div>
            )}
        </QuizFormBlock>
        
    );
};

export default QuizForm;