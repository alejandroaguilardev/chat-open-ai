import styles from './question.module.css';

type Props = {
    label: string;
    handleQuestion: (label: string) => void;
}

export function AskQuestion({ label, handleQuestion }: Props) {

    return (
        <div className={styles.question} onClick={() => handleQuestion(label)}>
            <p className={styles.questionLabel}>{label}</p>
        </div>
    );
}