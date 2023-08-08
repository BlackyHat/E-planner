import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import clsx from 'clsx';

import { BsChevronCompactDown } from 'react-icons/bs';
import scss from './LangSwitcher.module.scss';

const LangSwitcher = () => {
  const [open, setOpen] = useState(false);
  const langsToTranslate = ['en', 'de', 'it'];

  const handleOptionChange = (option: string) => {
    i18n.changeLanguage(option);
    toast.success(t('notify.Language was changed.'));
    setOpen(!open);
  };
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

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
          aria-label={t('Select language')}
        >
          <span className={scss.label}> {lang}</span>
          <span className={scss.openIconWrapper} onClick={() => setOpen(!open)}>
            <BsChevronCompactDown
              className={scss.openIcon}
              aria-label={t('Select language')}
            />
          </span>
        </button>

        <ul
          className={clsx(scss.dropdownMenu, open ? scss.active : scss.closed)}
        >
          {langsToTranslate
            .filter((option) => option !== lang)
            .map((option) => (
              <li
                key={option}
                className={scss.dropdownItem}
                onClick={() => handleOptionChange(option)}
                value={option}
              >
                <span className={scss.label}> {option}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LangSwitcher;
