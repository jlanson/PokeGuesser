import { useSelector } from 'react-redux';
import './display.css';
import { RootState } from '../../App';

interface DisplayProps {
  img: {
    url: string;
    alt: string;
  };
}

export default function Display({ img }: DisplayProps) {
  const isSillhoute = useSelector((state: RootState) => state.gameSettings.isSillhouteMode);

  return (
    <div>
      <div 
        className={isSillhoute ? 'sillhoute' : ''}
        style={isSillhoute ? { maskImage: `url(${img.url})`, WebkitMaskImage: `url(${img.url})`}: {backgroundImage: `url(${img.url})`, height: '300px', width: '300px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}
      >
      </div>
    </div>
  );
}
