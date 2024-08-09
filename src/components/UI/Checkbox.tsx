import { type ComponentPropsWithoutRef } from 'react';
import { type Generation } from '../../store/slices/pokemonGameSlice';
import { usePokemonReducer } from '../../store/hooks';

type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  generation: Generation | 'all';
};


export default function Button({label, generation, ...props}: CheckboxProps) {
  let gen: boolean;
  let toggleGen: () => void;

  if(generation === 'all'){
    [gen, toggleGen] = usePokemonReducer('all');
  }else{
    [gen, toggleGen] = usePokemonReducer(generation);
  }

  return (
    <>
      <label htmlFor={generation}>{label}</label>
      <input type="checkbox" id={generation} checked={gen} onChange={toggleGen} {...props} />
    </>
  )
}
