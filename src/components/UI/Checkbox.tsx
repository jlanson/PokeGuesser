import { useState, type ComponentPropsWithoutRef } from 'react';
import { toggleGeneration} from '../../store/slices/gameSettingsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../App';

type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  generation: number;
};


export default function Button({label, generation, ...props}: CheckboxProps) {

  const dispatch = useDispatch<AppDispatch>();
  const [checked, setChecked] = useState(true);
  let toggleGen = () =>{
    dispatch(toggleGeneration(generation));
    setChecked((prev) => !prev);
  }

  // if(generation === 'all'){
  //   [gen, toggleGen] = usePokemonReducer('all');
  // }else{
  //   [gen, toggleGen] = usePokemonReducer(generation);
  // }

  return (
    <>
      <label htmlFor={"generation-" + generation}>{label}</label>
      <input type="checkbox" id={"generation-" + generation} checked={checked} onChange={toggleGen} {...props} />
    </>
  )
}
