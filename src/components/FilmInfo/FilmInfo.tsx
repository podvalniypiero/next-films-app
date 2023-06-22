
import { FunctionComponent} from "react";
import styles from './styles.module.css'


interface Props {
    title: string;
    genre: "comedy" | "horror";
    seasonsCount: number;
};

export const FilmInfo: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
}) => {
    return (
        <>
          <p className={styles.title}>{title || 'Неизвестный'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{ seasonsCount > 0 ? `Количество: ${seasonsCount}` : 'Нет'}</p>
        </>
            

    );
};
