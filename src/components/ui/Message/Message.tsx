import { Message } from 'ai/react';
import styles from './message.module.css';

type Props = {
    message: Message;
}

export function MessageText({ message: m }: Props) {
    return (
        <div className={`${styles.message}  ${m.role === "user" ? styles.user : styles.assist}`}>
            <p >{m.role === "user" ? "" : <strong>Asistente:</strong>}</p>
            <p>
                {m.role !== 'data' && m.content}
                {m.role === 'data' && (
                    <>
                        {(m.data as any).description}
                        <br />
                        <pre className={styles.pre}>
                            {JSON.stringify(m.data, null, 2)}
                        </pre>
                    </>
                )}
            </p>
        </div>
    );
}