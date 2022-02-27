import styles from '../styles/Container.module.css';

/**
 * 
 * @param {*} param0 
 * @returns  
 * Container pur la navigation
 */
const Container = ({ children, className }) => {
  let containerClassName = styles.container;

  if ( className ) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName}>
      { children }
    </div>
  )
}

export default Container;