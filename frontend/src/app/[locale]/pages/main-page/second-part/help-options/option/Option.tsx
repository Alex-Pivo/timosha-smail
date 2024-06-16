import React, { MouseEventHandler } from 'react';
import styles from './Option.module.scss';
import { useTranslations } from 'next-intl';
import {Link} from "@/navigation";

interface IProps {
	name: string;
	description: string;
	href: string;
}

const Option: React.FC<IProps> = ({ name, description, href }) => {
	const t = useTranslations("helpOptions");
	return (
		<Link className={styles.form} href={href}>
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.description}>{description}</p>
			<Link href={href}  className={styles.contact}>
				{t('btn')}
			</Link>
		</Link>
	);
};

export default Option;
