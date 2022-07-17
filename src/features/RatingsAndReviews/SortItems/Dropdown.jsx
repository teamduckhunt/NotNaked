// /* eslint-disable react/jsx-closing-bracket-location */
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import onClickOutside from 'react-onclickoutside';
// import styles from './SortItems.module.css';

// function Dropdown({ title, items = [] }) {
//   const [open, setOpen] = useState(false);
//   const [selection, setSelection] = useState([]);
//   const toggle = () => setOpen(!open);
//   Dropdown.handleClickOutside = () => setOpen(false);

//   function handleOnClick(item) {
//     if (!selection.some((current) => current.id === item.id)) {
//       setSelection([item]);
//       // if (!multiSelect) {
//       //   setSelection([item]);
//       // } else if (multiSelect) {
//       //   setSelection([...selection, item]);
//       // }
//     } else {
//       let selectionAfterRemoval = selection;
//       selectionAfterRemoval = selectionAfterRemoval.filter(
//         (current) => current.id !== item.id,
//       );
//       setSelection([...selectionAfterRemoval]);
//     }
//   }

//   function isItemInSelection(item) {
//     if (selection.find(current => current.id === item.id)) {
//       return true;
//     }
//     return false;
//   }

//   return (
//     <div className={styles.dd_wrapper}>
//       <div
//         tabIndex={0}
//         role="button"
//         className={styles.dd_header}
//         onKeyPress={() => toggle(!open)}
//         onClick={() => toggle(!open)}>
//         <div className={styles.dd_header_title}>
//           <p className={styles.dd_header_title_bold}>{title}</p>
//         </div>
//         {/* <div className={styles.dd_header_action}>
//           <p>{open ? 'Close' : 'Open'}</p>
//         </div>
//         {open && (
//           <ul className={styles.dd_list}>
//             {items.map(item => (
//               <li className={styles.dd_list_item} key={item.id}>
//                 <button type="button" onClick={() => handleOnClick(item)}>
//                   <span>{item.value}</span>
//                   <span>{isItemInSelection(item) && 'Selected'}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )} */}
//       </div>
//     </div>

//   );
// }

// const clickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside,
// };

// // export default onClickOutside(Dropdown, clickOutsideConfig);

// export default Dropdown;

// Dropdown.propTypes = {
//   title: PropTypes.string.isRequired,
//   items: PropTypes.shape.isRequired,
// };
