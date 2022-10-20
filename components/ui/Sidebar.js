import Link from 'next/link';
import { RiHome6Line } from 'react-icons/ri';
import { TfiNotepad } from 'react-icons/tfi';
import { BsFileBarGraph } from 'react-icons/bs';
import { GiCash } from 'react-icons/gi';





import styles from '../../styles/Sidebar.module.scss'
import Image from 'next/image';

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <Link href='/' className={styles.active} passHref >
                    <Image
                        src='/images/logo.jpg'
                        width={100}
                        height={100} />
                </Link>
            </div>
            <ul className={styles.sidebar__list}>


                <li>
                    <Link href='' className={styles.active} ><RiHome6Line className={styles.active} /></Link>
                </li>
                <li>
                    <Link href='' ><TfiNotepad /></Link>
                </li>

                <li>
                    <Link href='' ><BsFileBarGraph /></Link>
                </li>

                <li>

                    <Link href='' ><GiCash /></Link>
                </li>
            </ul>
        </div>
    )
}
