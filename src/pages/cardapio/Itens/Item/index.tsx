import logo from 'assets/logo.svg'
import styles from './Item.module.scss'
import cardapio from '../itens.json'

type Props = typeof cardapio[0];

export default function Item(props: Props) {
    const { title, description, category, serving } = props
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
            <img src={logo} alt="imagem" />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>
                        {category.label}
                    </div>

                    <div className={styles.item__porcao}>
                        {serving}g
                    </div>

                    <div className={styles.item__qtdpessoa}>
                        serve 2 pessoas
                    </div>

                    <div className={styles.item__valor}>
                        R$ 50,00
                    </div>
                </div>
            </div>
        </div>
    )
}