import { MdOutlineCreate } from 'react-icons/md';
import { Button, ToggleButton, ToggleButtonGroup } from "../../../../node_modules/@mui/material/index";
import { QuizMakeFormBlock, QuizNumberBtnWrap, QuizNumberText } from "../../../styles/quiz/QuizElements";
import { BothInputWrap, ErrorText, InputBtnWrap, InputWrap } from "../../../styles/common/CommonElements";
import StyledButton from "../../common/Button";
import CategoryItem from "../CategoryItem";
import QuizDetailList from "../QuizDetailList";
import ModalForm from "../../common/ModalForm";
import Dialog from "../../common/Dialog";

/**
 * 퀴즈 만들기 또는 풀기 폼을 보여줌
 */

const QuizForm = ({
    step, 
    form, 
    data, 
    quizCount, 
    selectNumber, 
    errorText,
    isModalOpen, 
    onMadalClick, 
    onCateClick, 
    onChange, 
    onClick,
    isOpen, 
    handleClose, 
    onClickQuizNumberButton, 
    isDialogOpen, 
    isDialogClick 
}) => {
    return (
        <QuizMakeFormBlock>
            {step === "step1" && (
                <>
                    <InputWrap>
                        <label>제목*</label>
                        <input
                            type="text"
                            name="title"
                            onChange={e => onChange(e)}
                            value={data.title}
                            placeholder="퀴즈제목을 입력하세요."
                            required
                        />
                    </InputWrap>
                    <InputWrap>
                        <label>설명</label>
                        <input
                            type="text"
                            name="description"
                            onChange={e => onChange(e)}
                            value={data.description}
                            placeholder="퀴즈설명을 간단히 입력하세요."
                        />
                    </InputWrap>
                    <InputWrap>
                        <label>카테고리*</label>
                        <InputBtnWrap>
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
                        </InputBtnWrap>
                    </InputWrap>
                    {isModalOpen && 
                        <ModalForm isOpen={isModalOpen} title="카테고리 선택" onClose={onMadalClick[1]}>
                            <CategoryItem categories={form && form.data.data}  onClick={onCateClick} />
                        </ModalForm>
                    }
                    <BothInputWrap>
                        <InputWrap>
                            <label>개수(1-10개)*</label>
                            <input
                                type="text"
                                name="quizCount"
                                onChange={e => onChange(e)}
                                placeholder="퀴즈개수를 입력하세요."
                                value={data.quizCount}
                                min="1"
                                max="10"
                            />
                        </InputWrap>
                        <InputWrap>
                            <label>공개여부*</label>
                            <ToggleButtonGroup
                                name="accessibility"
                                value={data.accessibility}
                                exclusive
                                onChange={e => onChange(e, "accessibility")}
                                aria-label="Platform"
                            >
                                <ToggleButton value="PUBLIC">공개</ToggleButton>
                                <ToggleButton value="PRIVATE">비공개</ToggleButton>
                            </ToggleButtonGroup>
                        </InputWrap>
                    </BothInputWrap>
                </>
            )}
            {step === "step2" && (
                <>
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
                        <QuizNumberText>
                            <MdOutlineCreate />
                            {selectNumber}번 문제
                        </QuizNumberText>
                        <InputWrap>
                            <label>퀴즈정답</label>
                            <input
                                type="text"
                                name="answer"
                                value={form.answer}
                                onChange={onChange}
                                required
                            />
                        </InputWrap>
                        <InputWrap>
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
                        </InputWrap>
                        <ErrorText>{errorText}</ErrorText>
                    </form>
                    {isDialogOpen && 
                        <Dialog isOpen={isDialogOpen} onClose={isDialogClick[0]}
                            title="퀴즈 작성을 완료하시겠습니까?"
                            before={{ onClick: isDialogClick[0] }}
                            after={{ onClick: isDialogClick[1] }}
                        >
                            계속 진행하시려면 '확인'을 선택하세요.
                        </Dialog>
                    }
                </>
            )}
            {step === "step3" && (
                <>
                    <QuizDetailList type="make" form={form} />
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
            <StyledButton fullwidth indigo onClick={onClick}>
                {step === "step1" ? "다 음" : (step === "step2" ? "다 음 문 제" : "문 제 완 성")}
            </StyledButton>
        </QuizMakeFormBlock>
    );
};

export default QuizForm;