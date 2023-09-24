const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Satyam6767" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true" title="Satyam kumar' GitHub Profile"></i>
        
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/satyam-kumar-b3a99a209/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Satyam kumar' LinkedIn Profile"></i>
        

        
      </a>
      <a className="icon" style={styles.icon} href=" https://instagram.com/satyamkr.2001?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Satyam kumar' Instagram Profile"></i>
        
      </a>
      <a className="icon" style={styles.icon} href="https://auth.geeksforgeeks.org/user/satyamkumar6767" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-code" aria-hidden="true" title="Satyam kumar' GFG Profile"></i>
        
      </a>
      


      


    </div>
  );
};

export default SocialIcons;
