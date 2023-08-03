import clsx from 'clsx';
import scss from './LangSwitcher.module.scss';
import { useState } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('UK');
  const implementLangSupport = ['UK', 'UA', 'IT'];

  const handleOptionChange = (option: string) => {
    setLang(option);
    toast.success('Language was changed.');
    setOpen(!open);
  };
  return (
    <div className={scss.container}>
      <div
        className={clsx(scss.dropdownOverlay, open ? scss.active : scss.closed)}
        onClick={() => setOpen(false)}
      ></div>
      <div className={scss.dropdownContainer}>
        <button
          className={clsx(scss.button)}
          onClick={() => setOpen(!open)}
          type="button"
        >
          {lang}
          <span className={scss.openIconWrapper} onClick={() => setOpen(!open)}>
            <BsChevronCompactDown className={scss.openIcon} />
          </span>
        </button>

        <ul
          className={clsx(scss.dropdownMenu, open ? scss.active : scss.closed)}
        >
          {implementLangSupport.map((option) => (
            <li
              key={option}
              className={scss.dropdownItem}
              onClick={() => handleOptionChange(option)}
              value={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangSwitcher;
