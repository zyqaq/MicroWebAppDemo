import {Link, Outlet} from 'umi';
import styles from './index.less';
import yayJpg from '../assets/yay.jpg';
export default function Layout() {
    return (
        <div className={styles.navs}>
            <h2>umi 子应用</h2>
            <ul>
                <li>
                    <Link to="/">list</Link>
                </li>
                <li>
                    <Link to="/detail">detail</Link>
                </li>
            </ul>
            <Outlet/>
            <img src={yayJpg} />

        </div>
    );
}
