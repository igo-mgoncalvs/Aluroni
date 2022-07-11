import classNames from 'classnames';
import styles from './tagsPrato.module.scss';
import { Prato } from 'types/Prato';

export default function TagsPrato({
    category,
    size,
    serving,
    price
}: Prato) {

    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags_tipo]: true,
                [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>

            <div className={styles.tags__porcao}>
                {size}g
            </div>

            <div className={styles.tags__qtdpessoas}>
                serve {serving} pessoas
            </div>

            <div className={styles.tags__valor}>
                R$ {price}
            </div>
            
        </div>
    );
}