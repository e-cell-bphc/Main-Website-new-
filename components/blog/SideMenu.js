import { useEffect } from "react";
import styles from "../../styles/blog/sidemenu.module.css";

function SideMenu({ setSelectedOption, selectedOption }) {
	const handleClick = (index) => {
		setSelectedOption({...selectedOption, activeOption : selectedOption.options[index]})
	};
  useEffect(() => {
		setSelectedOption({ ...selectedOption, activeOption: selectedOption.options[0] });
	}, [])
	const toggleActiveOption = (index) => {
    if (selectedOption.options[index] == selectedOption.activeOption )
    {
      return styles.topic_active
    }
    else {
      return styles.topic_inactive
    }
  };
	return (
		<>
			<div className={styles.sidebar}>
				<div className={styles.topics}>
					{selectedOption.options.map((option, index) => {
						return (
							<div
								className={toggleActiveOption(index)}
								onClick={() => handleClick(index)}
								key={option.id}
							>
								{option.name}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default SideMenu;
