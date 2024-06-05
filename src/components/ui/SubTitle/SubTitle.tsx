import styles from './subtitle.module.css';

type Props = {
    label: string;
}

export function SubTitle({ label }: Props) {

    return (
        <h2 className={styles.subtitle}>{label}</h2>
    );
}
