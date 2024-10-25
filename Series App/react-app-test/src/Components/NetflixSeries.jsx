import SeriesData from '../API/SeriesData.json';
import { SeriesCard } from './SeriesCard';

export const NetflixSeries = () => {

    return (<ul className="card-container">
        {SeriesData.map((currentSeries) => {
           return <SeriesCard key={currentSeries.id} currentSeries={currentSeries} />
        })}
    </ul>);
};