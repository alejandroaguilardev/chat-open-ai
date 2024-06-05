import { ChangeEvent, KeyboardEvent } from 'react';
import styles from './input.module.css';
import { IconSendMessage } from '@/icons/send-message';

type Props = {
    status: string;
    value: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;

}
export function InputSend({ status, value, handleInputChange, handleKeyDown }: Props) {


    return (
        <div className={styles.inputContainer}>
            <textarea
                disabled={status !== 'awaiting_message'}
                value={value}
                placeholder="¿Qué te gustaría saber?..."
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={styles.inputField}
                style={{
                    opacity: status !== 'awaiting_message' ? .7 : 1,
                    cursor: status !== 'awaiting_message' ? "not-allowed" : "inherit"
                }}
            />
            <button type='submit' className={styles.submitButton}>
                <IconSendMessage />
            </button>
        </div>

    );
}
