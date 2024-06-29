import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import classes from './Music.module.css';
import { Link } from 'react-router-dom';

const data = [
    { name: 'HaiDiLao', artist: 'Ke Mu San', category: 'HARD' },
    { name: 'Nasty', artist: 'Tinashe', category: 'EASY' },
    { name: 'Renegade', artist: 'K Camp', category: 'HARD' },
    { name: 'Chika dance', artist: 'Chika ', category: 'MEDIUM' },
    { name: 'Nyah Arigato', artist: 'Leat', category: 'EASY' },
    { name: 'Daboy', artist: 'Tampias Fams', category: 'EASY' },
    { name: 'Foreigner', artist: 'Pop Smoke', category: 'MEDIUM' },
];

function getCategoryClass(category: string) {
    if (category === 'EASY') {
        return classes['category-easy'];
    }
    else if (category === 'HARD') {
        return classes['category-hard'];
    }
    else if (category === 'MEDIUM') {
        return classes['category-medium'];
    }
    return '';
}

export function Button() {
    const [state] = useListState(data);

    const items = state.map((item, index) => (
        <Link to ="/game" key={index} className={cx(classes.item, classes.link, getCategoryClass(item.category))}>
            <Text className={cx(classes.symbol, getCategoryClass(item.category))}>
                {item.category}
            </Text>
            <div className={classes['text-container']}>
                <Text size="md">{item.name}</Text>
                <Text c="dimmed" size="sm">
                    Artist: {item.artist}
                </Text>
            </div>
        </Link>
    ));

    return (
        <div>
            {items}
        </div>
    );
}
