import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu () {
    const rotas = [{
        label: 'Início',
        to: '/Aluroni'
    }, {
        label: 'Cardapio',
        to: '/Cardapio'
    }, {
        label: 'Sobre',
        to: '/Sobre'
    }];
    return (
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}