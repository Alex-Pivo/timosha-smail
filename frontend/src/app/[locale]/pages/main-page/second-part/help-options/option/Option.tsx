import React from 'react';
import styles from './Option.module.scss';
import {Link} from "@/navigation" ;
import { useTranslations } from 'next-intl';
interface IProps {
	name: string;
	description: string;
}

const Option: React.FC<IProps> = ({ name, description }) => {
	const t = useTranslations("helpOptions");
	return (
		<Link className={styles.form} href="/how-to-help">
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.description}>{description}</p>
			<Link href="/how-to-help" className={styles.contact}>
				{t('btn')}
			</Link>
		</Link>
	);
};

export default Option;
