import { useRef, useEffect } from 'react';
import { Message } from 'ai/react';
import { MessageText } from '@/components/ui/Message/Message';
import styles from './message-list.module.css';

type Props = {
    messages: Message[];
    isLoading: boolean;
}

export const MessageList = ({ messages, isLoading }: Props) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            {messages.map((m: Message) => (
                <MessageText message={m} key={m.id} />
            ))}
            {isLoading && <div className={styles["spinner-container"]}>
                <div className={styles["spinner"]}></div>
            </div>}


            <div ref={messagesEndRef} />
        </>
    )
}
