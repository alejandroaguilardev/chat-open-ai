import { useAssistant } from 'ai/react';
import styles from './assistant.module.css';
import { Title } from '../ui/Title/Title';
import { SubTitle } from '../ui/SubTitle/SubTitle';
import { AskQuestion } from '../ui/Asks/Ask';
import { InputSend } from '../ui/Input/InputSend';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { MessageList } from '../ui/Message/MessageList';

const questions = [
  '¿Que documentos necesito para que mi mascota viaje?',
  '¿Como se que jaula necesito para mi viaje',
  '¿Cuando entregan mis resultados del Test serological de rabia',
  '¿Que debo llevar a para mi inspección SENASA',
]

export function Assistant() {
  const { status, messages, input, submitMessage, setInput, handleInputChange } =
    useAssistant({ api: '/api/assistant' });
  const [sendQuestion, setSendQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuestion = useCallback((label: string) => {
    setInput(label);
    setSendQuestion(!sendQuestion)
  }, [setSendQuestion, sendQuestion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      setSendQuestion(!sendQuestion)
    }
  };

  useEffect(() => {
    submitMessage();
  }, [handleQuestion, sendQuestion])

  useEffect(() => {
    setIsLoading(status === 'in_progress');
  }, [status]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.messageContainer}>
          {messages.length > 0 ? (
            <MessageList messages={messages} isLoading={isLoading} />
          ) : (
            <>
              <Title label='¿Hola, cómo puedo ayudarle hoy?' />
              <SubTitle label='Pet travel Más de 10 años viajando mascotas felices ' />
              <div className={styles.questionContainer}>
                <div className={styles.questions}>
                  {questions.map(question => (
                    <AskQuestion key={question} label={question} handleQuestion={handleQuestion} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>


        <form onSubmit={submitMessage}>
          <InputSend value={input} handleInputChange={handleInputChange} status={status} handleKeyDown={handleKeyDown} />
          <div className={styles.disclaimer}>
            Viajar con mascotas puede mostrar información inexacta, así que verifique sus respuestas con su asesor.
          </div>
        </form>

      </div>
    </div>
  );
}
