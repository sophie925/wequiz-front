import { MdOutlineCreate } from 'react-icons/md';
import { Button } from "../../../../node_modules/@mui/material/index";
import { QuizMakeFormBlock, QuizNumberBtnWrap, QuizNumberText } from "../../../styles/quiz/QuizElements";
import { ErrorText } from "../../../styles/common/CommonElements";
import StyledButton from "../../common/Button";
import CategoryItem from "../CategoryItem";
import QuizDetailList from "../QuizDetailList";
import ModalForm from "../../common/ModalForm";
import Dialog from "../../common/Dialog";
import InputForm from '../../common/input/InputForm';
import InputButtonForm from '../../common/input/InputButtonForm';
import InputToggleForm from '../../common/input/InputToggleForm';
import InputHintForm from '../../common/input/InputHintForm';

/**
 * 퀴즈 만들기 폼을 보여줌
 */

const QuizMakeForm = ({
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
                    <InputForm
                        title="제목"
                        type="text"
                        name="title"
                        value={data.title}
                        placeholder="퀴즈제목을 입력하세요."
                        onChange={e => onChange(e)}
                        require={true}
                    />
                    <InputForm
                        title="설명"
                        type="text"
                        name="description"
                        value={data.description}
                        placeholder="퀴즈설명을 간단히 입력하세요."
                        onChange={e => onChange(e)}
                    />
                    <InputButtonForm
                        title="카테고리"
                        type="text"
                        name="categoryDispaly"
                        value={data.categoryDispaly}
                        placeholder="카테고리를 선택하세요."
                        require={true}
                        disabled={true}
                        onClick={onMadalClick[0]}
                        buttonText="선 택"

                    />
                    {isModalOpen && 
                        <ModalForm isOpen={isModalOpen} title="카테고리 선택" onClose={onMadalClick[1]}>
                            <CategoryItem categories={form && form.data.data}  onClick={onCateClick} />
                        </ModalForm>
                    }
                    <InputToggleForm
                        title1="개수(1-10개)"
                        type="text"
                        name1="quizCount"
                        value1={data.quizCount}
                        min="1"
                        max="10"
                        onChange1={e => onChange(e)}
                        require={true}
                        title2="공개여부"
                        name2="accessibility"
                        value2={data.accessibility}
                        onChange2={e => onChange(e, "accessibility")}
                        toggle={[{ value: 'PUBLIC', title: '공개' }, { value: 'PRIVATE', title: '비공개' }]}
                    />
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
                        <InputForm
                            title="퀴즈정답"
                            type="text"
                            name="answer"
                            value={form.answer}
                            onChange={onChange}
                            required={true}
                        />
                        <InputHintForm
                            hintCount={3}
                            type="text"
                            name="hints"
                            hintData={form}
                            onChange={onChange}
                            required={true}
                        />
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
                    <QuizDetailList
                        type="make"
                        form={form}
                    />
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
                {
                    step === "step1"
                    ? "다 음"
                    : (
                        step === "step2"
                        ? "다 음 문 제"
                        : "문 제 완 성"
                    )
                }
            </StyledButton>
        </QuizMakeFormBlock>
    );
};

export default QuizMakeForm;