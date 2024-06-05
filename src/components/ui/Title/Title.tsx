import styles from './title.module.css';

type Props = {
    label: string;
}

export function Title({ label }: Props) {

    return (
        <h1 className={styles.title}>{label}</h1>
    );
}
